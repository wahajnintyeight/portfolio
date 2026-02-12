import React, { useEffect, useState, useCallback } from 'react';
import { Icons } from './Icons';

interface ImageCarouselProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  isOpen, 
  onClose, 
  initialIndex = 0 
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialIndex]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, nextImage, prevImage]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md">
      
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 rounded-full bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-700/80 transition-colors z-50"
      >
        <Icons.close size={24} />
      </button>

      {/* Navigation - Left */}
      {images.length > 1 && (
        <button 
          onClick={(e) => { e.stopPropagation(); prevImage(); }}
          className="absolute left-4 p-2 rounded-full bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-700/80 transition-colors z-50"
        >
          <Icons.arrowLeft size={32} />
        </button>
      )}

      {/* Main Image */}
      <div className="w-full h-full p-4 sm:p-12 flex items-center justify-center" onClick={onClose}>
        <div 
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
        >
          <img 
            src={images[currentIndex]} 
            alt={`Project screenshot ${currentIndex + 1}`} 
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur rounded-full text-white text-sm font-medium">
             {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Navigation - Right */}
      {images.length > 1 && (
        <button 
          onClick={(e) => { e.stopPropagation(); nextImage(); }}
          className="absolute right-4 p-2 rounded-full bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-700/80 transition-colors z-50"
        >
          <Icons.arrowRight size={32} />
        </button>
      )}

      {/* Thumbnails (Optional, minimal version) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-white w-4' : 'bg-zinc-600 hover:bg-zinc-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};