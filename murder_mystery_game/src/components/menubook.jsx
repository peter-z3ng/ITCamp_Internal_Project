'use client';

import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useMediaQuery } from '@react-hook/media-query';
import Image from 'next/image';
import Link from 'next/link';
import { Cinzel, IM_Fell_English_SC } from "next/font/google";

const PAGE_WIDTH = 650;
const PAGE_HEIGHT = 800;

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "800",
});

const imfell = IM_Fell_English_SC({
  subsets: ["latin"],
  weight: "400",
});



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

              <div className="flex flex-col items-center mt-8">
                <Link href="/" className="group block">
                  <Image
                    src="/backtomenu.png"
                    alt="Back to main menu"
                    width={400}
                    height={600}
                    className="object-contain hover:scale-[1.05]"
                  />
                </Link>

                <h1 className={`${imfell.className} text-center text-4xl text-[#5A0F0F] -translate-y-5`}>
                  Main Menu
                </h1>
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
              
                <h1 className={`${imfell.className} mt-80 text-center text-6xl text-[#5A0F0F]`}>
                  Cases
                </h1>
            </div>
          </div>

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
                The fucking case 1
              </div>

              <div className="mt-8 flex flex-col items-center gap-8">
                <Link
                  href="/caseone"
                  className="group block w-full shrink-0 transition"
                >
                  <div className="relative mx-auto aspect-[4/3] w-full max-w-[28rem]">
                    <Image
                      src="/imgframe.png"
                      alt="Image frame"
                      fill
                      className="object-contain -translate-y-10 -translate-x-3"
                    />

                    <div className="absolute aspect-[16/10] inset-[10%] overflow-hidden w-[20rem] rounded-[0.3rem] translate-x-5.5 translate-y-4 rotate-1">
                    <Image
                      src="/case1bg.png"
                      alt="Open Case 1"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.2]"
                    />
                    </div>
                  </div>
                </Link>

                <div className="flex-1 text-sm leading-7">
                  <p>
                    A fresh case file waits behind this scene. The image takes
                    over the left side of the spread so it feels like a proper
                    entry point into the investigation.
                  </p>
                  <p className="mt-6">
                    Click the image to open the Case 1 page, then use the
                    casefile button in the top right corner to open or close
                    the modal evidence sheet.
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center text-xs uppercase tracking-[0.24em] text-[#6d4c38]">
                Click the image to enter Case 1
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
                MEOW
              </div>
              <div className="mt-10 text-sm leading-7">
                <p>
                  {"Meow Meow Meow Meow Meow\n".repeat(10)}
                </p>
              </div>
              <div className="mt-10 text-sm leading-7">
                <p>
                  {"Meow Meow Meow Meow Meow\n".repeat(10)}
                </p>
              </div>
              <div className="mt-10 text-sm leading-7">
                <p>
                  {"Meow Meow Meow Meow Meow\n".repeat(5)}
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
              <h1 className="mt-80 text-center font-serif text-xl text-[#B22222] font-light tracking-wide">
                will continue if someone die...
              </h1>
            </div>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
