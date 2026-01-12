import { useEffect, useState } from 'react';

interface ImageModalProps {
  images: string[];
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({ images, alt, isOpen, onClose }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePrevious = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrevious();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors cursor-pointer"
        aria-label="Close modal"
      >
        <i className="ri-close-line text-3xl"></i>
      </button>

      <div
        className="relative max-w-6xl w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handlePrevious(e);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all cursor-pointer touch-manipulation"
              aria-label="Previous image"
            >
              <i className="ri-arrow-left-s-line text-2xl"></i>
            </button>

            <button
              onClick={handleNext}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleNext(e);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all cursor-pointer touch-manipulation"
              aria-label="Next image"
            >
              <i className="ri-arrow-right-s-line text-2xl"></i>
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}