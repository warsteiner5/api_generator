/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterObjectAltDto } from '../models/api-base-filter-object';
export type ApiExternalDealFilterObjectAltDto = ApiBaseFilterObjectAltDto & {
'DealNumber'?: string | null;
'ParticipantName'?: string | null;
'ParticipantInn'?: string | null;
'ParticipantKpp'?: string | null;
'ConclusionDateFrom'?: string | null;
'ConclusionDateTo'?: string | null;
'PriceMin'?: number | null;
'PriceMax'?: number | null;
'DealSubject'?: string | null;
};
