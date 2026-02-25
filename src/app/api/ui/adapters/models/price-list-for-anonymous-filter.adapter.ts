import { ApiPriceListForAnonymousFilterDto } from '../../../swagger/models/api-price-list-for-anonymous-filter-dto';
import { PriceListForAnonymousFilter } from '../../models/price-list-for-anonymous-filter.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';
import { getPriceListsParamAltAdapter } from './get-price-lists-param-alt.adapter';
import { participantOfferTypeEnumAdapter } from '../enums/participant-offer-type-enum.adapter';
import { usedClassificatorTypeEnumAdapter } from '../enums/used-classificator-type-enum.adapter';

export const priceListForAnonymousFilterAdapter = (source?: ApiPriceListForAnonymousFilterDto | null): PriceListForAnonymousFilter => {
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
    offerType: source?.OfferType === null ? undefined : participantOfferTypeEnumAdapter(source?.OfferType),
    manufacturer: source?.Manufacturer,
    isHomeRegionsSearch: source?.IsHomeRegionsSearch,
    showTotal: source?.ShowTotal,
    priceListParams: source?.PriceListParams === null ? undefined : getPriceListsParamAltAdapter(source?.PriceListParams),
  };
}
