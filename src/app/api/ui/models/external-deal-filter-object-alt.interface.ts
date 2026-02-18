import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';

export type ExternalDealFilterObjectAlt = BaseFilterObjectAlt & { 'DealNumber'?: string | null; 'ParticipantName'?: string | null; 'ParticipantInn'?: string | null; 'ParticipantKpp'?: string | null; 'ConclusionDateFrom'?: string | null; 'ConclusionDateTo'?: string | null; 'PriceMin'?: number | null; 'PriceMax'?: number | null; 'DealSubject'?: string | null; };
