import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';

// @ts-ignore
export interface ExternalDealFilterObjectAlt extends BaseFilterObjectAlt {
  dealNumber: string;
  participantName: string;
  participantInn: string;
  participantKpp: string;
  conclusionDateFrom: string;
  conclusionDateTo: string;
  priceMin: number;
  priceMax: number;
  dealSubject: string;
}
