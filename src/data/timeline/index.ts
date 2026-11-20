import type { TimelineEvent } from '@/lib/content-types';

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'timeline-1',
    title: 'Started BSc Computer Science at BITS Pilani',
    description: 'Started the BSc Computer Science program and began studying programming, systems, and mathematics.',
    date: 'June 2023',
    type: 'education',
    impact: 'Built the academic foundation for later software and machine-learning work.',
  },
  {
    id: 'timeline-2',
    title: 'Started BTech Computer Science at IILM University',
    description: 'Started the BTech Computer Science program at IILM University alongside my independent project work.',
    date: 'July 2023',
    type: 'education',
    impact: 'Added an engineering-focused curriculum to my computer-science studies.',
  },
  {
    id: 'timeline-3',
    title: 'Won a Hackathon',
    description: 'Built and presented a working project under a hackathon deadline, finishing in first place.',
    date: 'Feb 2024',
    type: 'achievement',
    impact: 'Practised scoping, building, and presenting under a fixed deadline.',
  },
  {
    id: 'timeline-4',
    title: 'Research Paper on Deep Learning',
    description: 'Published my first paper on a deep-learning topic.',
    date: 'Nov 2025',
    type: 'research',
    impact: 'Learned the full research workflow: experiments, writing, revision, and publication.',
  },
  {
    id: 'timeline-5',
    title: 'Research Paper on Graph Neural Networks',
    description: 'Published research focused on graph neural networks.',
    date: 'May 2026',
    type: 'research',
    impact: 'Extended my research work from standard deep learning to graph-structured data.',
  },
  {
    id: 'timeline-6',
    title: 'Building in Public',
    description: 'Building projects across applied machine learning, security, and full-stack development.',
    date: 'Ongoing',
    type: 'launch',
    impact: 'Using each project to practise a new model, system design, or product workflow.',
  },
];
