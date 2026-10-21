import React, { useEffect, useRef, useState, useCallback } from 'react';

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
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      closeRef.current?.focus({ preventScroll: true });
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
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project screenshots">
      <div className="lightbox__bar">
        <span>{currentIndex + 1} / {images.length}</span>
        <button ref={closeRef} className="lightbox__btn" onClick={onClose}>Close</button>
      </div>

      <div className="lightbox__stage" onClick={onClose}>
        <img
          src={images[currentIndex]}
          alt={`Project screenshot ${currentIndex + 1} of ${images.length}`}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {images.length > 1 && (
        <div className="lightbox__nav">
          <button className="lightbox__btn" onClick={prevImage}>Previous</button>
          <button className="lightbox__btn" onClick={nextImage}>Next</button>
        </div>
      )}
    </div>
  );
};
