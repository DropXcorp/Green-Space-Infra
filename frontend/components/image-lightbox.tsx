"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface ImageLightboxProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

export default function ImageLightbox({ images }: ImageLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isOpen = selectedIndex !== null;

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex]);

  return (
    <div>
      {/* THUMBNAIL GALLERY GRID */}
      <div className="grid gap-4 sm:grid-cols-3">
        {images.map((img, idx) => (
          <div
            key={img.src}
            onClick={() => setSelectedIndex(idx)}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-[20px] border border-black/8 bg-black"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-1.08 group-hover:opacity-90"
            />
            <div className="absolute inset-0 grid place-items-center bg-black/30 opacity-0 transition group-hover:opacity-100">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[#111611] shadow-lg backdrop-blur-md">
                <Maximize2 size={16} />
              </div>
            </div>
            {img.caption && (
              <span className="absolute bottom-3 left-3 rounded-full bg-[#111711]/75 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                {img.caption}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute right-6 top-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#111711]"
              aria-label="Close Lightbox"
            >
              <X size={22} />
            </button>

            {/* Left Nav Arrow */}
            {images.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-50 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#111711]"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Right Nav Arrow */}
            {images.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-50 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#111711]"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Main Image Container */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-[90vw] aspect-[16/10] w-full overflow-hidden rounded-[28px] shadow-2xl"
            >
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                priority
                className="object-contain"
              />
              {images[selectedIndex].caption && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#111711]/80 px-6 py-2 text-xs font-bold text-white backdrop-blur-md">
                  {images[selectedIndex].caption}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
