import { PriceListFilter } from '../../models/price-list-filter.interface';
import { ApiPriceListFilterDto } from '../../../swagger/models/api-price-list-filter-dto';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';
import { apiGetPriceListsParamAltDtoAdapter } from './api-get-price-lists-param.adapter';
import { apiParticipantOfferSpecificFlagEnumAdapter } from '../enums/api-participant-offer-specific-flag-enum.adapter';
import { apiParticipantOfferStateEnumAdapter } from '../enums/api-participant-offer-state-enum.adapter';
import { apiParticipantOfferTypeEnumAdapter } from '../enums/api-participant-offer-type-enum.adapter';
import { apiUsedClassificatorTypeEnumAdapter } from '../enums/api-used-classificator-type-enum.adapter';

export const apiPriceListFilterDtoAdapter = (source?: PriceListFilter | null): ApiPriceListFilterDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    ProductName: source?.productName,
    ProductNameFTS: source?.productNameFTS,
    UsedClassificator: source?.usedClassificator === null ? undefined : apiUsedClassificatorTypeEnumAdapter(source?.usedClassificator),
    ClassificatorCodes: source?.classificatorCodes,
    PriceFrom: source?.priceFrom,
    PriceTo: source?.priceTo,
    OfferTermsFrom: source?.offerTermsFrom,
    OfferTermsTo: source?.offerTermsTo,
    OfferState: source?.offerState === null ? undefined : apiParticipantOfferStateEnumAdapter(source?.offerState),
    ParticipantId: source?.participantId,
    ParticipantInn: source?.participantInn,
    ParticipantName: source?.participantName,
    OfferType: source?.offerType === null ? undefined : apiParticipantOfferTypeEnumAdapter(source?.offerType),
    ParticipantOfferSpecific: source?.participantOfferSpecific === null ? undefined : apiParticipantOfferSpecificFlagEnumAdapter(source?.participantOfferSpecific),
    PublishDateFrom: source?.publishDateFrom,
    PublishDateTo: source?.publishDateTo,
    IsPublicOffer: source?.isPublicOffer,
    Manufacturer: source?.manufacturer,
    ShowGuaranteedSuppliers: source?.showGuaranteedSuppliers,
    IsHomeRegionsSearch: source?.isHomeRegionsSearch,
    ShowTotal: source?.showTotal,
    PriceListsParam: source?.priceListsParam === null ? undefined : apiGetPriceListsParamAltDtoAdapter(source?.priceListsParam),
  };
}
