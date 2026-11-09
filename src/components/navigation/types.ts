export interface Section {
  id: string;
  title: string;
}

export interface ScrollSpyOptions {
  rootMargin?: string;
  threshold?: number | number[];
}

export interface ScrollSpyItem {
  id: string;
  isActive: boolean;
}
