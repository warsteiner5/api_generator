import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';

export type AcceptedPriceListFilter = BaseFilterObjectAlt & { 'TradeId'?: number; 'DeliveryKladrRegionCode'?: string | null; };
