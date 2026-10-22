import React, { useEffect, useRef, useState } from 'react';
import { Icons } from './Icons';

interface ImageCarouselProps {
  images: string[];
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images, title = 'Project', isOpen, onClose, initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen || !dialogRef.current) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    setCurrentIndex(Math.min(initialIndex, Math.max(0, images.length - 1)));
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, initialIndex, images.length]);

  const move = (offset: number) => {
    setCurrentIndex((index) => (index + offset + images.length) % images.length);
  };

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={`${title} screenshots`}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onKeyDown={(event) => {
        if (images.length < 2) return;
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      }}
    >
      <div className="lightbox__bar">
        <p><strong>{title.split(' - ')[0]}</strong><span>{currentIndex + 1} / {images.length}</span></p>
        <button className="lightbox__button" type="button" onClick={onClose} autoFocus>
          Close<Icons.close size={20} aria-hidden="true" />
        </button>
      </div>
      <div className="lightbox__stage" onClick={onClose}>
        {images[currentIndex] && (
          <img
            src={images[currentIndex]}
            alt={`${title}, screenshot ${currentIndex + 1} of ${images.length}`}
            onClick={(event) => event.stopPropagation()}
          />
        )}
      </div>
      {images.length > 1 && (
        <div className="lightbox__navigation">
          <button className="lightbox__button" type="button" onClick={() => move(-1)}>
            <Icons.arrowLeft size={20} aria-hidden="true" />Previous
          </button>
          <button className="lightbox__button" type="button" onClick={() => move(1)}>
            Next<Icons.arrowRight size={20} aria-hidden="true" />
          </button>
        </div>
      )}
    </dialog>
  );
};
