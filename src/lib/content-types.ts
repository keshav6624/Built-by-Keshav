import type { StaticImageData } from 'next/image';

export interface Project {
  id: string;
  title: string;
  image: StaticImageData;
  shortDescription: string;
  problem: string;
  description: string;
  stack: string[];
  metric: string;
  businessImpact: string;
  showItems: string[];
  tags: string[];
  featured: boolean;
  date: string;
  category: string;
  content?: string;
  link?: string;
  github?: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  type: string;
  impact?: string;
}

