import { projectCatalog } from './catalog';
import { validateProjects } from './validation';

export const projects = validateProjects(projectCatalog);
