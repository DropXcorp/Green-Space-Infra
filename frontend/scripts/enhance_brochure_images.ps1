Add-Type -AssemblyName System.Drawing

$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public class ImageEnhancer
{
    public static Bitmap Crop(Bitmap src, Rectangle rect)
    {
        Bitmap bmp = new Bitmap(rect.Width, rect.Height, PixelFormat.Format32bppArgb);
        using (Graphics g = Graphics.FromImage(bmp))
        {
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;
            g.SmoothingMode = SmoothingMode.HighQuality;
            g.DrawImage(src, new Rectangle(0, 0, rect.Width, rect.Height), rect, GraphicsUnit.Pixel);
        }
        return bmp;
    }

    public static Bitmap Resize(Bitmap src, int targetWidth, int targetHeight)
    {
        Bitmap bmp = new Bitmap(targetWidth, targetHeight, PixelFormat.Format32bppArgb);
        using (Graphics g = Graphics.FromImage(bmp))
        {
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;
            g.SmoothingMode = SmoothingMode.HighQuality;
            g.CompositingQuality = CompositingQuality.HighQuality;
            g.DrawImage(src, 0, 0, targetWidth, targetHeight);
        }
        return bmp;
    }

    // Auto-levels, contrast stretching, color balance, and saturation
    public static Bitmap ProcessColors(Bitmap src, float shadowPercent, float highlightPercent, float saturationBoost, float gamma, float rBoost, float gBoost, float bBoost)
    {
        int width = src.Width;
        int height = src.Height;
        Bitmap result = new Bitmap(width, height, PixelFormat.Format32bppArgb);

        BitmapData srcData = src.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
        BitmapData dstData = result.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);

        int totalPixels = width * height;
        byte[] pixels = new byte[totalPixels * 4];
        Marshal.Copy(srcData.Scan0, pixels, 0, pixels.Length);
        src.UnlockBits(srcData);

        // Calculate histograms for R, G, B
        int[] histR = new int[256];
        int[] histG = new int[256];
        int[] histB = new int[256];

        for (int i = 0; i < pixels.Length; i += 4)
        {
            histB[pixels[i]]++;
            histG[pixels[i + 1]]++;
            histR[pixels[i + 2]]++;
        }

        // Find min and max clip levels
        int clipLow = (int)(totalPixels * shadowPercent);
        int clipHigh = (int)(totalPixels * (1.0f - highlightPercent));

        int minR = 0, maxR = 255, count = 0;
        for (int i = 0; i < 256; i++) { count += histR[i]; if (count >= clipLow) { minR = i; break; } }
        count = 0;
        for (int i = 255; i >= 0; i--) { count += histR[i]; if (count >= totalPixels - clipHigh) { maxR = i; break; } }
        if (maxR <= minR) maxR = minR + 1;

        int minG = 0, maxG = 255; count = 0;
        for (int i = 0; i < 256; i++) { count += histG[i]; if (count >= clipLow) { minG = i; break; } }
        count = 0;
        for (int i = 255; i >= 0; i--) { count += histG[i]; if (count >= totalPixels - clipHigh) { maxG = i; break; } }
        if (maxG <= minG) maxG = minG + 1;

        int minB = 0, maxB = 255; count = 0;
        for (int i = 0; i < 256; i++) { count += histB[i]; if (count >= clipLow) { minB = i; break; } }
        count = 0;
        for (int i = 255; i >= 0; i--) { count += histB[i]; if (count >= totalPixels - clipHigh) { maxB = i; break; } }
        if (maxB <= minB) maxB = minB + 1;

        // Process pixels
        for (int i = 0; i < pixels.Length; i += 4)
        {
            float b = (pixels[i] - minB) / (float)(maxB - minB);
            float g = (pixels[i + 1] - minG) / (float)(maxG - minG);
            float r = (pixels[i + 2] - minR) / (float)(maxR - minR);

            b = Math.Max(0f, Math.Min(1f, b)) * bBoost;
            g = Math.Max(0f, Math.Min(1f, g)) * gBoost;
            r = Math.Max(0f, Math.Min(1f, r)) * rBoost;

            if (gamma != 1.0f)
            {
                b = (float)Math.Pow(Math.Max(0, b), 1.0 / gamma);
                g = (float)Math.Pow(Math.Max(0, g), 1.0 / gamma);
                r = (float)Math.Pow(Math.Max(0, r), 1.0 / gamma);
            }

            // Saturation boost
            float gray = 0.299f * r + 0.587f * g + 0.114f * b;
            r = gray + (r - gray) * saturationBoost;
            g = gray + (g - gray) * saturationBoost;
            b = gray + (b - gray) * saturationBoost;

            pixels[i] = (byte)Math.Max(0, Math.Min(255, (int)(b * 255f)));
            pixels[i + 1] = (byte)Math.Max(0, Math.Min(255, (int)(g * 255f)));
            pixels[i + 2] = (byte)Math.Max(0, Math.Min(255, (int)(r * 255f)));
            pixels[i + 3] = 255;
        }

        Marshal.Copy(pixels, 0, dstData.Scan0, pixels.Length);
        result.UnlockBits(dstData);
        return result;
    }

    // Unsharp mask / edge sharpening filter
    public static Bitmap Sharpen(Bitmap src, float strength)
    {
        int width = src.Width;
        int height = src.Height;
        Bitmap result = new Bitmap(width, height, PixelFormat.Format32bppArgb);

        BitmapData srcData = src.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
        BitmapData dstData = result.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);

        int stride = srcData.Stride;
        byte[] srcPixels = new byte[stride * height];
        byte[] dstPixels = new byte[stride * height];

        Marshal.Copy(srcData.Scan0, srcPixels, 0, srcPixels.Length);
        Array.Copy(srcPixels, dstPixels, srcPixels.Length);

        // 3x3 Laplacian / Unsharp Kernel
        float c = strength;
        float center = 1.0f + 4.0f * c;
        float side = -c;

        for (int y = 1; y < height - 1; y++)
        {
            int row = y * stride;
            int rowUp = (y - 1) * stride;
            int rowDown = (y + 1) * stride;

            for (int x = 1; x < width - 1; x++)
            {
                int px = row + (x * 4);
                int pxUp = rowUp + (x * 4);
                int pxDown = rowDown + (x * 4);
                int pxLeft = row + ((x - 1) * 4);
                int pxRight = row + ((x + 1) * 4);

                for (int cIdx = 0; cIdx < 3; cIdx++) // B, G, R
                {
                    float val = srcPixels[px + cIdx] * center 
                              + (srcPixels[pxUp + cIdx] + srcPixels[pxDown + cIdx] + srcPixels[pxLeft + cIdx] + srcPixels[pxRight + cIdx]) * side;

                    dstPixels[px + cIdx] = (byte)Math.Max(0, Math.Min(255, (int)val));
                }
                dstPixels[px + 3] = 255;
            }
        }

        Marshal.Copy(dstPixels, 0, dstData.Scan0, dstPixels.Length);
        src.UnlockBits(srcData);
        result.UnlockBits(dstData);
        return result;
    }

    public static void SaveJpeg(Bitmap bmp, string path, long quality)
    {
        ImageCodecInfo jpgEncoder = null;
        ImageCodecInfo[] codecs = ImageCodecInfo.GetImageEncoders();
        foreach (ImageCodecInfo codec in codecs)
        {
            if (codec.FormatID == ImageFormat.Jpeg.Guid)
            {
                jpgEncoder = codec;
                break;
            }
        }
        EncoderParameters encParams = new EncoderParameters(1);
        encParams.Param[0] = new EncoderParameter(Encoder.Quality, quality);
        bmp.Save(path, jpgEncoder, encParams);
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies "System.Drawing"

$sourcePath = "d:\Green-Space Infra\scan-page-4.png"
$sourceImg = [System.Drawing.Bitmap]::FromFile($sourcePath)

$outputDir = "d:\Green-Space Infra\frontend\public\images\brochure"
$backupDir = Join-Path $outputDir "backup_before_enhancement"
New-Item -ItemType Directory -Force -Path $backupDir | Out-Null

# Backup existing files
Copy-Item (Join-Path $outputDir "green-space-comfort-1.jpg") $backupDir -Force
Copy-Item (Join-Path $outputDir "green-space-comfort-2.jpg") $backupDir -Force
Copy-Item (Join-Path $outputDir "green-space-spv.jpg") $backupDir -Force

Write-Host "Backed up original brochure images."

# 1. ENHANCE COMFORT 1
$crop1 = [ImageEnhancer]::Crop($sourceImg, (New-Object System.Drawing.Rectangle(893, 274, 311, 239)))
$up1 = [ImageEnhancer]::Resize($crop1, 933, 717)
$crop1.Dispose()
$enh1 = [ImageEnhancer]::ProcessColors($up1, 0.02, 0.01, 1.15, 1.05, 1.0, 1.02, 1.06)
$up1.Dispose()
$sharp1 = [ImageEnhancer]::Sharpen($enh1, 0.28)
$enh1.Dispose()
[ImageEnhancer]::SaveJpeg($sharp1, (Join-Path $outputDir "green-space-comfort-1.jpg"), 95)
$sharp1.Dispose()
Write-Host "Enhanced green-space-comfort-1.jpg"

# 2. ENHANCE COMFORT 2
$crop2 = [ImageEnhancer]::Crop($sourceImg, (New-Object System.Drawing.Rectangle(896, 594, 311, 225)))
$up2 = [ImageEnhancer]::Resize($crop2, 933, 675)
$crop2.Dispose()
$enh2 = [ImageEnhancer]::ProcessColors($up2, 0.025, 0.01, 1.2, 1.08, 1.04, 1.01, 1.05)
$up2.Dispose()
$sharp2 = [ImageEnhancer]::Sharpen($enh2, 0.30)
$enh2.Dispose()
[ImageEnhancer]::SaveJpeg($sharp2, (Join-Path $outputDir "green-space-comfort-2.jpg"), 95)
$sharp2.Dispose()
Write-Host "Enhanced green-space-comfort-2.jpg"

# 3. ENHANCE SPV
$crop3 = [ImageEnhancer]::Crop($sourceImg, (New-Object System.Drawing.Rectangle(908, 890, 303, 236)))
$up3 = [ImageEnhancer]::Resize($crop3, 909, 708)
$crop3.Dispose()
$enh3 = [ImageEnhancer]::ProcessColors($up3, 0.03, 0.015, 1.35, 1.12, 1.02, 1.06, 1.0)
$up3.Dispose()
$sharp3 = [ImageEnhancer]::Sharpen($enh3, 0.32)
$enh3.Dispose()
[ImageEnhancer]::SaveJpeg($sharp3, (Join-Path $outputDir "green-space-spv.jpg"), 95)
$sharp3.Dispose()
Write-Host "Enhanced green-space-spv.jpg"

$sourceImg.Dispose()
Write-Host "All 3 images enhanced successfully!"
