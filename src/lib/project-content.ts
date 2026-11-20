export interface ProjectContentSection {
  heading: string;
  paragraphs: string[];
  bullets: string[];
}

export function parseProjectContent(content: string): ProjectContentSection[] {
  const blocks = content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const sections: ProjectContentSection[] = [];

  for (const block of blocks) {
    const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
    const firstLine = lines[0];
    const startsWithHeading =
      firstLine.length <= 40 &&
      !firstLine.startsWith('•') &&
      !/[.!?]$/.test(firstLine);

    if (startsWithHeading) {
      sections.push({ heading: firstLine, paragraphs: [], bullets: [] });
    }

    const section = sections.at(-1) ?? { heading: 'Overview', paragraphs: [], bullets: [] };
    if (sections.length === 0) sections.push(section);

    for (const line of startsWithHeading ? lines.slice(1) : lines) {
      if (line.startsWith('•')) {
        section.bullets.push(line.slice(1).trim());
      } else {
        section.paragraphs.push(line);
      }
    }
  }

  return sections;
}
