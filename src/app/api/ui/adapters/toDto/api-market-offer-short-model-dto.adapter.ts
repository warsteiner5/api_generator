import { MarketOfferShortModel } from '../../models/market-offer-short-model.interface';
import { ApiMarketOfferShortModelDto } from '../../../swagger/models/api-market-offer-short-model-dto';
import { adaptApiB2BCategoryDto } from './api-b-2-b-category-dto.adapter';
import { adaptApiOkeiShortDto } from './api-okei-short-dto.adapter';
import { adaptApiOkpd2Dto } from './api-okpd-2-dto.adapter';
import { adaptApiParticipantOfferStateEnum } from './api-participant-offer-state-enum.adapter';
import { adaptApiRegionKladrDto } from './api-region-kladr-dto.adapter';

export function adaptApiMarketOfferShortModelDto(source?: MarketOfferShortModel | null): ApiMarketOfferShortModelDto {
  return {
    Category: adaptApiB2BCategoryDto(source?.category),
    CountryCode: source?.countryCode,
    Id: source?.id,
    Images: source?.images ?? [],
    OfferState: adaptApiParticipantOfferStateEnum(source?.offerState),
    Okei: adaptApiOkeiShortDto(source?.okei),
    OkeiCode: source?.okeiCode,
    Okpd2Codes: (source?.okpd2Codes ?? []).map((item) => adaptApiOkpd2Dto(item)),
    OrganizationGuid: source?.organizationGuid,
    Price: source?.price,
    PriceListId: source?.priceListId,
    ProductDescription: source?.productDescription,
    ProductName: source?.productName,
    Quantity: source?.quantity,
    RegionalProductSignTenantId: source?.regionalProductSignTenantId,
    Regions: (source?.regions ?? []).map((item) => adaptApiRegionKladrDto(item)),
    WasApproved: source?.wasApproved,
  };
}
