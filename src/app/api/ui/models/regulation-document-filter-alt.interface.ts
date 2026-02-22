import { BaseFilterAlt } from './base-filter-alt.interface';

// @ts-ignore
export interface RegulationDocumentFilterAlt extends BaseFilterAlt {
  isActual: boolean;
  typeId: number;
  typeIds: number[];
  showHidden: boolean;
}
