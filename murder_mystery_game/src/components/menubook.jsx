'use client';

import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useMediaQuery } from '@react-hook/media-query';
import Image from 'next/image';

const PAGE_WIDTH = 650;
const PAGE_HEIGHT = 800;

export default function BookTestimonials({
  testimonials,
}) {
  const book = useRef(null);
  useMediaQuery('(min-width: 640px)');

  const handleFlip = (pageNum) => {
    const flipBook = book.current?.pageFlip?.();
    if (!flipBook) return;
    flipBook.flip(pageNum);
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      {/* Background image */}
      <Image
        src="/menubg.png"
        alt="Book background"
        fill
        priority
        className="object-cover"
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Flipbook aligned over the book in the background */}
      <div className="absolute left-1/2 top-[50%] z-10 -translate-x-1/2 -translate-y-1/2">
        <HTMLFlipBook
          ref={book}
          width={PAGE_WIDTH}
          height={PAGE_HEIGHT}
          showCover={false}
          usePortrait={false}
          onFlip={(e) => console.log('Flipped to page:', e.data)}
          onChangeState={(e) => console.log('State:', e.data)}
          size="fixed"
          minWidth={PAGE_WIDTH}
          maxWidth={PAGE_WIDTH}
          minHeight={PAGE_HEIGHT}
          maxHeight={PAGE_HEIGHT}
          drawShadow={false}
          flippingTime={600}
          startPage={0}
          startZIndex={0}
          autoSize={false}
          maxShadowOpacity={0}
          mobileScrollSupport={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={0}
          showPageCorners={false}
          disableFlipByClick={false}
          style={{
          backgroundImage: "url('/book.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}

        >
          {/* Left page */}
          <div className="flex h-full w-full items-center justify-end">
            <div
              className="translate-x-35 translate-y-2 flex h-[96%] w-[78%] flex-col justify-start px-10 py-10 text-[#2b1d14]"
              style={{
                backgroundImage: "url('/leftpaper.png')",
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1 className="mt-4 text-center font-serif text-3xl font-bold tracking-wide">
                Case 1
              </h1>
              <div className="mt-6 border-b border-[#6d4c38]/40 pb-4 text-center text-sm italic">
                Meow Meow Meow
              </div>

              <div className="mt-10 text-sm leading-7">
                <p>
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                </p>
              </div>
              <div className="mt-10 text-sm leading-7">
                <p>
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                  Meow Meow Meow Meow Meow Meow
                </p>
              </div>
            </div>
          </div>

          {/* Right index page */}
          <div className="flex h-full w-full items-center justify-start">
            <div
              className="-translate-x-3 flex translate-y-2 h-[96%] w-[78%] flex-col px-12 py-10 text-[#2b1d14]"
              style={{
                backgroundImage: "url('/rightpaper.png')",
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1 className="mt-4 text-center font-serif text-3xl font-bold tracking-wide">
                Case 2
              </h1>
              <div className="mt-6 border-b border-[#6d4c38]/40 pb-4 text-center text-sm italic">
                Woof Woof Woof
              </div>
              <div className="mt-10 text-sm leading-7">
                <p>
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                </p>
              </div>
              <div className="mt-10 text-sm leading-7">
                <p>
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                </p>
              </div>
              <div className="mt-10 text-sm leading-7">
                <p>
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                  Woof Woof Woof Woof Woof Woof Woof
                </p>
              </div>
            </div>
          </div>

          {/* Left intro page */}
          <div className="flex h-full w-full items-center justify-end">
            <div
              className="translate-x-35 translate-y-2 flex h-[96%] w-[78%] flex-col justify-start px-10 py-10 text-[#2b1d14]"
              style={{
                backgroundImage: "url('/leftpaper.png')",
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1 className="mt-4 text-center font-serif text-3xl font-bold tracking-wide">
                Case 3
              </h1>
              <div className="mt-6 border-b border-[#6d4c38]/40 pb-4 text-center text-sm italic">
                67
              </div>

              <div className="mt-10 text-sm leading-7">
                <p>
                  {"67 67 67 67 67 67 67 67 67 67\n".repeat(30)}
                </p>
              </div>
            </div>
          </div>

          {/* Right index page */}
          <div className="flex h-full w-full items-center justify-start">
            <div
              className="-translate-x-3 flex translate-y-2 h-[96%] w-[78%] flex-col px-12 py-10 text-[#2b1d14]"
              style={{
                backgroundImage: "url('/rightpaper.png')",
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1 className="mt-4 text-center font-serif text-3xl font-bold tracking-wide">
                Case 4
              </h1>
              <h1 className="mt-80 text-center font-serif text-5xl font-light tracking-wide">
                Coming Soon
              </h1>
            </div>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
