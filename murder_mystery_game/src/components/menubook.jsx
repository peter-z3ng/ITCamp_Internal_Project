'use client';

import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useMediaQuery } from '@react-hook/media-query';
import Image from 'next/image';
import Link from 'next/link';
import { Cinzel, IM_Fell_English_SC } from "next/font/google";
import { STORIES } from '@/lib/stories';

const sterling = STORIES.sterling_estate;
const ko = STORIES.knives_out;
const itc = STORIES.sim_it_club;

const PAGE_WIDTH = 650;
const PAGE_HEIGHT = 800;

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});

const imfell = IM_Fell_English_SC({
  subsets: ["latin"],
  weight: "400"
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

          {/* Main menu page*/}
          <div className="flex h-full w-full items-center justify-end">
              <div className="flex flex-col items-center translate-x-20">
                <Link href="/">
                  <Image
                    src="/backtomenu.png"
                    alt="Back to main menu"
                    width={520}
                    height={600}
                    className="object-contain hover:scale-[1.1]"
                  />
                </Link>
                <h1 className={`${imfell.className} text-center text-4xl text-[#5A0F0F] -translate-y-42`}>
                  Main Menu
                </h1>
              </div>
          </div>

          {/* Cases page */}
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

          {/* Case 1 left page */}
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
              <h1 className={`${imfell.className} mt-12 mb-8 pb-6 text-center text-2xl text-[#5A0F0F] border-b border-[#5A0F0F]/40`}>
                {sterling.title}
              </h1>

              <div className="mt-8 flex flex-col items-center gap-6">
                <Link
                  href="/caseone"
                  className="group block w-full shrink-0 transition"
                >
                  <div className="relative mx-auto aspect-4/3 w-full max-w-28rem">
                    <Image
                      src="/imgframe.png"
                      alt="Image frame"
                      fill
                      className="object-contain -translate-y-10 -translate-x-3"
                    />

                    <div className="absolute aspect-16/10 inset-[10%] overflow-hidden w-[20rem] rounded-[0.3rem] translate-x-5.5 translate-y-4 rotate-1">
                    <Image
                      src="/caseonepreview.png"
                      alt="Open Case 1"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.2]"
                    />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-col items-center gap-6 mt-6">
                <p className={`${cinzel.className} -mt-10 text-center text-sm text-[#5A0F0F]`}>
                    {sterling.casefile.headline}
                </p>
                <div className="transition-all duration-300 hover:scale-0 hover:opacity-0">
                  <Image
                        src="/paperweight.png"
                        alt="Heavy paperweight"
                        width="80"
                        height="100"
                      />
                </div>
              </div>
            </div>
          </div>

          {/* Case 1 right page */}
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
              <p className={`${imfell.className} mt-18 text-center text-m text-[#5A0F0F] leading-8`}>
                  {sterling.casefile.overview}
              </p>
              <div className={`${cinzel.className} mt-6 text-center text-xs text-[#5A0F0F]/80 leading-6`}>
                  <h1 className="font-bold text-xl">Objective</h1>
                  {sterling.casefile.objective}
              </div>
            </div>
          </div>

          {/* Case 2 left page */}
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
              <h1 className={`${imfell.className} mt-12 mb-8 pb-6 text-center text-2xl text-[#5A0F0F] border-b border-[#5A0F0F]/40`}>
                {ko.title}
              </h1>

              <div className="mt-8 flex flex-col items-center gap-6">
                <Link
                  href="/casetwo"
                  className="group block w-full shrink-0 transition"
                >
                  <div className="relative mx-auto aspect-4/3 w-full max-w-28rem">
                    <Image
                      src="/imgframe.png"
                      alt="Image frame"
                      fill
                      className="object-contain -translate-y-10 -translate-x-3"
                    />

                    <div className="absolute aspect-16/10 inset-[10%] overflow-hidden w-[20rem] rounded-[0.3rem] translate-x-5.5 translate-y-4 rotate-1">
                    <Image
                      src="/casetwopreview.png"
                      alt="Open Case 2"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.2]"
                    />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-col items-center -mt-4">
                <div className="-mb-16 -rotate-10 opacity-0 transition-all duration-300 hover:opacity-100">
                  <Image
                        src="/knife.png"
                        alt="Syringe"
                        width="200"
                        height="400"
                      />
                </div>
                <p className={`${cinzel.className} text-center text-sm text-[#5A0F0F] whitespace-pre-line`}>
                  Famed Mystery Author <span className="mx-8"></span>Found Dead in His Study
                </p>
                <div className="mt-15 translate-x-40">
                  <Image
                        src="/syr.png"
                        alt="Syringe"
                        width="100"
                        height="200"
                      />
                </div>
                
              </div>
            </div>
          </div>

          {/* Case 2 right page */}
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
              <p className={`${imfell.className} mt-18 text-center text-m text-[#5A0F0F] leading-8`}>
                  {ko.casefile.overview}
              </p>
              <div className={`${cinzel.className} mt-6 text-center text-xs text-[#5A0F0F]/80 leading-6`}>
                  <h1 className="font-bold text-xl">Objective</h1>
                  {ko.casefile.objective}
              </div>
            </div>
          </div>

          {/* Case 3 left page */}
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
              <h1 className={`${imfell.className} mt-12 mb-8 pb-6 text-center text-2xl text-[#5A0F0F] border-b border-[#5A0F0F]/40`}>
                {itc.title}
              </h1>

              <div className="mt-8 flex flex-col items-center gap-6">
                <Link
                  href="/casethree"
                  className="group block w-full shrink-0 transition"
                >
                  <div className="relative mx-auto aspect-4/3 w-full max-w-28rem">
                    <Image
                      src="/imgframe.png"
                      alt="Image frame"
                      fill
                      className="object-contain -translate-y-10 -translate-x-3"
                    />

                    <div className="absolute aspect-16/10 inset-[10%] overflow-hidden w-[20rem] rounded-[0.3rem] translate-x-5.5 translate-y-4 rotate-1">
                    <Image
                      src="/casethree.png"
                      alt="Open Case 3"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.2]"
                    />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-col items-center gap-6 mt-6">
                <p className={`${cinzel.className} -mt-5 text-center text-sm text-[#5A0F0F]`}>
                    {itc.casefile.headline}
                </p>
                <div className="transition-all duration-300 hover:scale-0 hover:opacity-0">
                  <Image
                        src="/paperweight.png"
                        alt="Heavy paperweight"
                        width="80"
                        height="100"
                      />
                </div>
              </div>
            </div>
          </div>

          {/* Case 3 right page */}
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
              <p className={`${imfell.className} mt-18 text-center text-m text-[#5A0F0F] leading-7`}>
                  {itc.casefile.overview}
              </p>
              <div className={`${cinzel.className} mt-6 text-center text-xs text-[#5A0F0F]/80 leading-6`}>
                  <h1 className="font-bold text-xl">Objective</h1>
                  {itc.casefile.objective}
              </div>
            </div>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
