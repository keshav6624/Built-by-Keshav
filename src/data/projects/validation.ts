import type { Project } from '@/lib/content-types';

const requiredTextFields = [
  'id',
  'title',
  'shortDescription',
  'problem',
  'description',
  'metric',
  'businessImpact',
  'date',
  'category',
] as const satisfies readonly (keyof Project)[];

export function validateProjects(catalog: Project[]): Project[] {
  const ids = new Set<string>();

  for (const project of catalog) {
    for (const field of requiredTextFields) {
      const value = project[field];
      if (typeof value !== 'string' || value.trim().length === 0) {
        throw new Error(`Project "${project.id || 'unknown'}" is missing ${field}.`);
      }
    }

    if (ids.has(project.id)) {
      throw new Error(`Duplicate project id: ${project.id}`);
    }

    if (project.stack.length === 0 || project.tags.length === 0) {
      throw new Error(`Project "${project.id}" must include stack and tag values.`);
    }

    ids.add(project.id);
  }

  return catalog;
}
