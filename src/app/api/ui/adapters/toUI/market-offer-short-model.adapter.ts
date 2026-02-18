import { ApiMarketOfferShortModelDto } from '../../../swagger/models/api-market-offer-short-model-dto';
import { MarketOfferShortModel } from '../../models/market-offer-short-model.interface';
import { adaptB2BCategoryToUI } from './b-2-b-category.adapter';
import { adaptOkeiShortToUI } from './okei-short.adapter';
import { adaptOkpd2ToUI } from './okpd-2.adapter';
import { adaptParticipantOfferStateEnumToUI } from './participant-offer-state-enum.adapter';
import { adaptRegionKladrToUI } from './region-kladr.adapter';

export function adaptMarketOfferShortModelToUI(source?: ApiMarketOfferShortModelDto | null): MarketOfferShortModel {
  return {
    category: adaptB2BCategoryToUI(source?.Category),
    countryCode: source?.CountryCode ?? '',
    id: source?.Id ?? 0,
    images: source?.Images ?? [],
    offerState: adaptParticipantOfferStateEnumToUI(source?.OfferState),
    okei: adaptOkeiShortToUI(source?.Okei),
    okeiCode: source?.OkeiCode ?? '',
    okpd2Codes: (source?.Okpd2Codes ?? []).map((item) => adaptOkpd2ToUI(item)),
    organizationGuid: source?.OrganizationGuid ?? '',
    price: source?.Price ?? 0,
    priceListId: source?.PriceListId ?? 0,
    productDescription: source?.ProductDescription ?? '',
    productName: source?.ProductName ?? '',
    quantity: source?.Quantity ?? 0,
    regionalProductSignTenantId: source?.RegionalProductSignTenantId ?? 0,
    regions: (source?.Regions ?? []).map((item) => adaptRegionKladrToUI(item)),
    wasApproved: source?.WasApproved ?? false,
  };
}
