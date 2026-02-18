import { Document } from './document.interface';

export type RequirementRequestDocument = Document & { 'FileSize'?: number | null; };
