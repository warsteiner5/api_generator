import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { GetPriceListsParamAlt } from './get-price-lists-param-alt.interface';
import { ParticipantOfferSpecificFlagEnum } from '../enums/participant-offer-specific-flag.enum';
import { ParticipantOfferStateEnum } from '../enums/participant-offer-state.enum';
import { ParticipantOfferTypeEnum } from '../enums/participant-offer-type.enum';
import { UsedClassificatorTypeEnum } from '../enums/used-classificator-type.enum';

export type PriceListFilter = BaseFilterObjectAlt & { 'ProductName'?: string | null; 'ProductNameFTS'?: string | null; 'UsedClassificator'?: UsedClassificatorTypeEnum | null; 'ClassificatorCodes'?: Array<string> | null; 'PriceFrom'?: number | null; 'PriceTo'?: number | null; 'OfferTermsFrom'?: string | null; 'OfferTermsTo'?: string | null; 'OfferState'?: ParticipantOfferStateEnum | null; 'ParticipantId'?: number | null; 'ParticipantInn'?: string | null; 'ParticipantName'?: string | null; 'OfferType'?: ParticipantOfferTypeEnum; 'ParticipantOfferSpecific'?: ParticipantOfferSpecificFlagEnum | null; 'PublishDateFrom'?: string | null; 'PublishDateTo'?: string | null; 'IsPublicOffer'?: boolean | null; 'Manufacturer'?: string | null; 'ShowGuaranteedSuppliers'?: boolean; 'IsHomeRegionsSearch'?: boolean; 'ShowTotal'?: boolean; 'PriceListsParam'?: GetPriceListsParamAlt | null; };
