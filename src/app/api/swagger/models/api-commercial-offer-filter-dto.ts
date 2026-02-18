/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterObjectAltDto } from '../models/api-base-filter-object';
import { ApiParticipantOfferStateEnum } from '../models/api-participant-offer-state-enum';
import { ApiUsedClassificatorTypeEnum } from '../models/api-used-classificator-type-enum';
export type ApiCommercialOfferFilterDto = ApiBaseFilterObjectAltDto & {
'UsedClassificator'?: ApiUsedClassificatorTypeEnum | null;
'ClassificatorCodes'?: Array<string> | null;
'OfferState'?: ApiParticipantOfferStateEnum | null;
'ParticipantInn'?: string | null;
'ProductName'?: string | null;
'ProductNameFTS'?: string | null;
'OrganizationId'?: number | null;
'TenantId'?: number;
};
