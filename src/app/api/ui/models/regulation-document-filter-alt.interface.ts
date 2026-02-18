import { BaseFilterAlt } from './base-filter-alt.interface';

export type RegulationDocumentFilterAlt = BaseFilterAlt & { 'IsActual'?: boolean | null; 'TypeId'?: number | null; 'TypeIds'?: Array<number> | null; 'ShowHidden'?: boolean; };
