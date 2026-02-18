/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterObjectAltDto } from '../models/api-base-filter-object';
import { ApiGetPriceListsParamAltDto } from '../models/api-get-price-lists-param';
import { ApiParticipantOfferTypeEnum } from '../models/api-participant-offer-type-enum';
import { ApiUsedClassificatorTypeEnum } from '../models/api-used-classificator-type-enum';
export type ApiPriceListForAnonymousFilterDto = ApiBaseFilterObjectAltDto & {
'ProductName'?: string | null;
'ProductNameFTS'?: string | null;
'UsedClassificator'?: ApiUsedClassificatorTypeEnum | null;
'ClassificatorCodes'?: Array<string> | null;
'PriceFrom'?: number | null;
'PriceTo'?: number | null;
'OfferTermsFrom'?: string | null;
'OfferTermsTo'?: string | null;
'OfferType'?: ApiParticipantOfferTypeEnum;
'Manufacturer'?: string | null;
'IsHomeRegionsSearch'?: boolean;
'ShowTotal'?: boolean;
'PriceListParams'?: ApiGetPriceListsParamAltDto | null;
};
