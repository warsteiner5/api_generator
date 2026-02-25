import { ApiPriceListFilterDto } from '../../../swagger/models/api-price-list-filter-dto';
import { PriceListFilter } from '../../models/price-list-filter.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';
import { getPriceListsParamAltAdapter } from './get-price-lists-param-alt.adapter';
import { participantOfferSpecificFlagEnumAdapter } from '../enums/participant-offer-specific-flag-enum.adapter';
import { participantOfferStateEnumAdapter } from '../enums/participant-offer-state-enum.adapter';
import { participantOfferTypeEnumAdapter } from '../enums/participant-offer-type-enum.adapter';
import { usedClassificatorTypeEnumAdapter } from '../enums/used-classificator-type-enum.adapter';

export const priceListFilterAdapter = (source?: ApiPriceListFilterDto | null): PriceListFilter => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    productName: source?.ProductName,
    productNameFTS: source?.ProductNameFTS,
    usedClassificator: source?.UsedClassificator === null ? undefined : usedClassificatorTypeEnumAdapter(source?.UsedClassificator),
    classificatorCodes: source?.ClassificatorCodes,
    priceFrom: source?.PriceFrom,
    priceTo: source?.PriceTo,
    offerTermsFrom: source?.OfferTermsFrom,
    offerTermsTo: source?.OfferTermsTo,
    offerState: source?.OfferState === null ? undefined : participantOfferStateEnumAdapter(source?.OfferState),
    participantId: source?.ParticipantId,
    participantInn: source?.ParticipantInn,
    participantName: source?.ParticipantName,
    offerType: source?.OfferType === null ? undefined : participantOfferTypeEnumAdapter(source?.OfferType),
    participantOfferSpecific: source?.ParticipantOfferSpecific === null ? undefined : participantOfferSpecificFlagEnumAdapter(source?.ParticipantOfferSpecific),
    publishDateFrom: source?.PublishDateFrom,
    publishDateTo: source?.PublishDateTo,
    isPublicOffer: source?.IsPublicOffer,
    manufacturer: source?.Manufacturer,
    showGuaranteedSuppliers: source?.ShowGuaranteedSuppliers,
    isHomeRegionsSearch: source?.IsHomeRegionsSearch,
    showTotal: source?.ShowTotal,
    priceListsParam: source?.PriceListsParam === null ? undefined : getPriceListsParamAltAdapter(source?.PriceListsParam),
  };
}
