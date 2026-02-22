import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { GetPriceListsParamAlt } from './get-price-lists-param-alt.interface';
import { ParticipantOfferSpecificFlagEnum } from '../enums/participant-offer-specific-flag.enum';
import { ParticipantOfferStateEnum } from '../enums/participant-offer-state.enum';
import { ParticipantOfferTypeEnum } from '../enums/participant-offer-type.enum';
import { UsedClassificatorTypeEnum } from '../enums/used-classificator-type.enum';

// @ts-ignore
export interface PriceListFilter extends BaseFilterObjectAlt {
  productName: string;
  productNameFTS: string;
  usedClassificator: UsedClassificatorTypeEnum;
  classificatorCodes: string[];
  priceFrom: number;
  priceTo: number;
  offerTermsFrom: string;
  offerTermsTo: string;
  offerState: ParticipantOfferStateEnum;
  participantId: number;
  participantInn: string;
  participantName: string;
  offerType: ParticipantOfferTypeEnum;
  participantOfferSpecific: ParticipantOfferSpecificFlagEnum;
  publishDateFrom: string;
  publishDateTo: string;
  isPublicOffer: boolean;
  manufacturer: string;
  showGuaranteedSuppliers: boolean;
  isHomeRegionsSearch: boolean;
  showTotal: boolean;
  priceListsParam: GetPriceListsParamAlt;
}
