'use client';

import BookTestimonials from '@/components/menubook';
import { STORIES } from '@/lib/stories';

export default function MenuPage() {
  const testimonials = Object.values(STORIES).map((story) => ({
    name: story.title,
    jobtitle: story.setting?.location || 'Case File',
    text:
      story.casefile?.headline ||
      story.casefile?.overview?.trim()?.slice(0, 140) ||
      'A case file awaits.',
    rating: 5,
  }));

  return <BookTestimonials testimonials={testimonials} />;
}
