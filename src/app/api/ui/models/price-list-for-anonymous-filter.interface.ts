import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { GetPriceListsParamAlt } from './get-price-lists-param-alt.interface';
import { ParticipantOfferTypeEnum } from '../enums/participant-offer-type.enum';
import { UsedClassificatorTypeEnum } from '../enums/used-classificator-type.enum';

export type PriceListForAnonymousFilter = BaseFilterObjectAlt & { 'ProductName'?: string | null; 'ProductNameFTS'?: string | null; 'UsedClassificator'?: UsedClassificatorTypeEnum | null; 'ClassificatorCodes'?: Array<string> | null; 'PriceFrom'?: number | null; 'PriceTo'?: number | null; 'OfferTermsFrom'?: string | null; 'OfferTermsTo'?: string | null; 'OfferType'?: ParticipantOfferTypeEnum; 'Manufacturer'?: string | null; 'IsHomeRegionsSearch'?: boolean; 'ShowTotal'?: boolean; 'PriceListParams'?: GetPriceListsParamAlt | null; };
