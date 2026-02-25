import { PriceListForAnonymousFilter } from '../../models/price-list-for-anonymous-filter.interface';
import { ApiPriceListForAnonymousFilterDto } from '../../../swagger/models/api-price-list-for-anonymous-filter-dto';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';
import { apiGetPriceListsParamAltDtoAdapter } from './api-get-price-lists-param.adapter';
import { apiParticipantOfferTypeEnumAdapter } from '../enums/api-participant-offer-type-enum.adapter';
import { apiUsedClassificatorTypeEnumAdapter } from '../enums/api-used-classificator-type-enum.adapter';

export const apiPriceListForAnonymousFilterDtoAdapter = (source?: PriceListForAnonymousFilter | null): ApiPriceListForAnonymousFilterDto => {
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
    OfferType: source?.offerType === null ? undefined : apiParticipantOfferTypeEnumAdapter(source?.offerType),
    Manufacturer: source?.manufacturer,
    IsHomeRegionsSearch: source?.isHomeRegionsSearch,
    ShowTotal: source?.showTotal,
    PriceListParams: source?.priceListParams === null ? undefined : apiGetPriceListsParamAltDtoAdapter(source?.priceListParams),
  };
}
