import { MarketOfferShortModel } from '../../models/market-offer-short-model.interface';
import { ApiMarketOfferShortModelDto } from '../../../swagger/models/api-market-offer-short-model-dto';
import { apiB2BCategoryDtoAdapter } from './api-b-2-b-category-dto.adapter';
import { apiOkeiShortDtoAdapter } from './api-okei-short-dto.adapter';
import { apiOkpd2DtoAdapter } from './api-okpd-2-dto.adapter';
import { apiParticipantOfferStateEnumAdapter } from '../enums/api-participant-offer-state-enum.adapter';
import { apiRegionKladrDtoAdapter } from './api-region-kladr-dto.adapter';

export const apiMarketOfferShortModelDtoAdapter = (source?: MarketOfferShortModel | null): ApiMarketOfferShortModelDto => {
  return {
    Category: source?.category === null ? undefined : apiB2BCategoryDtoAdapter(source?.category),
    CountryCode: source?.countryCode,
    Id: source?.id,
    Images: source?.images,
    OfferState: source?.offerState === null ? undefined : apiParticipantOfferStateEnumAdapter(source?.offerState),
    Okei: source?.okei === null ? undefined : apiOkeiShortDtoAdapter(source?.okei),
    OkeiCode: source?.okeiCode,
    Okpd2Codes: source?.okpd2Codes?.map((item) => apiOkpd2DtoAdapter(item)),
    OrganizationGuid: source?.organizationGuid,
    Price: source?.price,
    PriceListId: source?.priceListId,
    ProductDescription: source?.productDescription,
    ProductName: source?.productName,
    Quantity: source?.quantity,
    RegionalProductSignTenantId: source?.regionalProductSignTenantId,
    Regions: source?.regions?.map((item) => apiRegionKladrDtoAdapter(item)),
    WasApproved: source?.wasApproved,
  };
}
