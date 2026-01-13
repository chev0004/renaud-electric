'use client';

import { GripVertical } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const BEFORE_IMG = '/before.jpg';
const AFTER_IMG = '/after.jpg';

interface BeforeAfterSliderProps {
  inline?: boolean;
}

export function BeforeAfterSlider({
  inline = false,
}: BeforeAfterSliderProps = {}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

    setSliderPosition(percentage);
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      handleMove(e.clientX);
    },
    [handleMove],
  );

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault(); // Prevent vertical scrolling
      handleMove(e.touches[0].clientX);
    },
    [handleMove],
  );

  const stopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', stopDragging);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', stopDragging);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stopDragging);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, onMouseMove, onTouchMove, stopDragging]);

  const sliderContent = (
    <div className="relative -mx-2 w-[calc(100%+1rem)] px-2 sm:mx-0 sm:w-full sm:px-0">
      <div
        ref={containerRef}
        className="group relative aspect-2/3 w-full select-none overflow-hidden rounded-lg shadow-xl md:w-100"
      >
        {/* Before Image Layer */}
        <div className="absolute inset-0">
          <Image
            src={BEFORE_IMG}
            alt="Before"
            fill
            className="object-cover"
            priority
          />
          {/* This tag is now part of the Before layer */}
          <div className="pointer-events-none absolute bottom-6 left-6 z-10 rounded-md bg-brand-red/90 px-3 py-1 font-bold text-white text-xs uppercase tracking-widest backdrop-blur-md">
            Before
          </div>
        </div>

        {/* After Image Layer (Clipped) */}
        <div
          className="absolute inset-0 z-20 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <Image
            src={AFTER_IMG}
            alt="After"
            fill
            className="object-cover"
            priority
          />
          {/* This tag is part of the After layer and will cover the Before tag */}
          <div className="pointer-events-none absolute right-6 bottom-6 z-10 rounded-md bg-brand-dark/90 px-3 py-1 font-bold text-white text-xs uppercase tracking-widest backdrop-blur-md">
            After
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)]"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle */}
          <div
            className={`absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none items-center justify-center rounded-full bg-white shadow-2xl ring-4 ring-black/5 transition-transform ${isDragging ? 'scale-110' : 'group-hover:scale-105'}`}
            role="slider"
            aria-label="Electrical transformation slider"
            aria-valuenow={sliderPosition}
            tabIndex={0}
            onMouseDown={(e) => {
              e.stopPropagation();
              setIsDragging(true);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              setIsDragging(true);
              // Prevent default only when touching the handle
              if (e.touches.length === 1) {
                e.preventDefault();
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft')
                setSliderPosition((p) => Math.max(0, p - 5));
              if (e.key === 'ArrowRight')
                setSliderPosition((p) => Math.min(100, p + 5));
            }}
          >
            <GripVertical className="h-6 w-6 text-brand-red" />
          </div>
        </div>
      </div>
    </div>
  );

  if (inline) {
    return sliderContent;
  }

  return (
    <section id="before-after" className="relative bg-white py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-black text-4xl text-brand-dark tracking-tight sm:text-5xl">
            See The <span className="text-brand-red">Transformation</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 text-lg">
            Drag the slider to see how we resolve inspection deal-breakers.
          </p>
        </div>

        <div className="mx-auto max-w-124">
          {sliderContent}
          <p className="mt-6 text-center text-gray-400 text-sm italic">
            Click and drag to compare the results
          </p>
        </div>
      </div>
    </section>
  );
}
