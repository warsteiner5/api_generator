import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';

// @ts-ignore
export interface ParticipantOfferImportTaskFilterAlt extends BaseFilterObjectAlt {
  priceListId: number;
  fileName: string;
  createDateFrom: string;
  createDateTo: string;
}
