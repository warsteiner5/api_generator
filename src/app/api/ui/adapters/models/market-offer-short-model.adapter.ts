import { ApiMarketOfferShortModelDto } from '../../../swagger/models/api-market-offer-short-model-dto';
import { MarketOfferShortModel } from '../../models/market-offer-short-model.interface';
import { b2BCategoryAdapter } from './b-2-b-category.adapter';
import { okeiShortAdapter } from './okei-short.adapter';
import { okpd2Adapter } from './okpd-2.adapter';
import { participantOfferStateEnumAdapter } from '../enums/participant-offer-state-enum.adapter';
import { regionKladrAdapter } from './region-kladr.adapter';

export const marketOfferShortModelAdapter = (source?: ApiMarketOfferShortModelDto | null): MarketOfferShortModel => {
  return {
    category: source?.Category === null ? undefined : b2BCategoryAdapter(source?.Category),
    countryCode: source?.CountryCode,
    id: source?.Id,
    images: source?.Images,
    offerState: source?.OfferState === null ? undefined : participantOfferStateEnumAdapter(source?.OfferState),
    okei: source?.Okei === null ? undefined : okeiShortAdapter(source?.Okei),
    okeiCode: source?.OkeiCode,
    okpd2Codes: source?.Okpd2Codes?.map((item) => okpd2Adapter(item)),
    organizationGuid: source?.OrganizationGuid,
    price: source?.Price,
    priceListId: source?.PriceListId,
    productDescription: source?.ProductDescription,
    productName: source?.ProductName,
    quantity: source?.Quantity,
    regionalProductSignTenantId: source?.RegionalProductSignTenantId,
    regions: source?.Regions?.map((item) => regionKladrAdapter(item)),
    wasApproved: source?.WasApproved,
  };
}
