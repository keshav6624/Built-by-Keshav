export interface Project {
  id: string;
  title: string;
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

export interface Writing {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: number;
  tags: string[];
  featured: boolean;
  category: string;
  content: string;
}

export interface LibraryItem {
  id: string;
  title: string;
  author?: string;
  type: 'book' | 'paper' | 'repo' | 'doc' | 'video' | 'podcast' | 'resource';
  description: string;
  tags?: string[];
  link?: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  type: string;
  impact?: string;
}

export interface ProjectMeta {
  id: string;
  date: string;
}

export interface LifeGoal {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'idea' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
}
