/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterObjectAltDto } from '../models/api-base-filter-object';
import { ApiGetPriceListsParamAltDto } from '../models/api-get-price-lists-param';
import { ApiParticipantOfferSpecificFlagEnum } from '../models/api-participant-offer-specific-flag-enum';
import { ApiParticipantOfferStateEnum } from '../models/api-participant-offer-state-enum';
import { ApiParticipantOfferTypeEnum } from '../models/api-participant-offer-type-enum';
import { ApiUsedClassificatorTypeEnum } from '../models/api-used-classificator-type-enum';
export type ApiPriceListFilterDto = ApiBaseFilterObjectAltDto & {
'ProductName'?: string | null;
'ProductNameFTS'?: string | null;
'UsedClassificator'?: ApiUsedClassificatorTypeEnum | null;
'ClassificatorCodes'?: Array<string> | null;
'PriceFrom'?: number | null;
'PriceTo'?: number | null;
'OfferTermsFrom'?: string | null;
'OfferTermsTo'?: string | null;
'OfferState'?: ApiParticipantOfferStateEnum | null;
'ParticipantId'?: number | null;
'ParticipantInn'?: string | null;
'ParticipantName'?: string | null;
'OfferType'?: ApiParticipantOfferTypeEnum;
'ParticipantOfferSpecific'?: ApiParticipantOfferSpecificFlagEnum | null;
'PublishDateFrom'?: string | null;
'PublishDateTo'?: string | null;
'IsPublicOffer'?: boolean | null;
'Manufacturer'?: string | null;
'ShowGuaranteedSuppliers'?: boolean;
'IsHomeRegionsSearch'?: boolean;
'ShowTotal'?: boolean;
'PriceListsParam'?: ApiGetPriceListsParamAltDto | null;
};
