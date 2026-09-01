$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$source = Join-Path $PSScriptRoot "..\..\scan-page-4.png"
$peopleSource = Join-Path $PSScriptRoot "..\..\scan-page-2.png"
$output = Join-Path $PSScriptRoot "..\public\images\brochure"
New-Item -ItemType Directory -Force -Path $output | Out-Null

function Export-Crop {
  param(
    [string]$InputPath,
    [string]$OutputName,
    [int]$X,
    [int]$Y,
    [int]$Width,
    [int]$Height
  )

  $sourceImage = [System.Drawing.Bitmap]::FromFile($InputPath)
  try {
    $rectangle = New-Object System.Drawing.Rectangle($X, $Y, $Width, $Height)
    $crop = $sourceImage.Clone($rectangle, $sourceImage.PixelFormat)
    try {
      $destination = Join-Path $output $OutputName
      $crop.Save($destination, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    }
    finally {
      $crop.Dispose()
    }
  }
  finally {
    $sourceImage.Dispose()
  }
}

# Exact photographs and portraits reproduced from the supplied company brochure.
Export-Crop $source "green-space-residency.jpg" 48 211 374 270
Export-Crop $source "green-space-elite.jpg" 441 205 375 285
Export-Crop $source "green-space-lotus.jpg" 47 548 380 280
Export-Crop $source "green-space-orchid.jpg" 470 555 345 272
Export-Crop $source "green-space-jewel.jpg" 245 906 380 280
Export-Crop $source "green-space-comfort-1.jpg" 891 271 316 246
Export-Crop $source "green-space-comfort-2.jpg" 894 590 315 232
Export-Crop $source "green-space-spv.jpg" 905 887 309 242
Export-Crop $source "green-space-bhagiratha.jpg" 437 1388 414 210

Export-Crop $peopleSource "u-mahesh-kumar.jpg" 145 1004 220 235
Export-Crop $peopleSource "ravi-chandra-babu-kundeti.jpg" 146 1318 227 232
