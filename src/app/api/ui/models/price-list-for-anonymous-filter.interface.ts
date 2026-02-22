import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { GetPriceListsParamAlt } from './get-price-lists-param-alt.interface';
import { ParticipantOfferTypeEnum } from '../enums/participant-offer-type.enum';
import { UsedClassificatorTypeEnum } from '../enums/used-classificator-type.enum';

// @ts-ignore
export interface PriceListForAnonymousFilter extends BaseFilterObjectAlt {
  productName: string;
  productNameFTS: string;
  usedClassificator: UsedClassificatorTypeEnum;
  classificatorCodes: string[];
  priceFrom: number;
  priceTo: number;
  offerTermsFrom: string;
  offerTermsTo: string;
  offerType: ParticipantOfferTypeEnum;
  manufacturer: string;
  isHomeRegionsSearch: boolean;
  showTotal: boolean;
  priceListParams: GetPriceListsParamAlt;
}
