import { MarketOrganizationCompanyProfile } from '../../models/market-organization-company-profile.interface';
import { ApiMarketOrganizationCompanyProfileDto } from '../../../swagger/models/api-market-organization-company-profile-dto';
import { apiIndustryDtoAdapter } from './api-industry-dto.adapter';
import { apiMarketOrganizationProfileAppearanceDtoAdapter } from './api-market-organization-profile-appearance-dto.adapter';
import { apiMarketOrganizationProfileContactsDtoAdapter } from './api-market-organization-profile-contacts-dto.adapter';
import { apiMarketOrganizationProfileDocumentDtoAdapter } from './api-market-organization-profile-document-dto.adapter';
import { apiMarketOrganizationProfileProductsDtoAdapter } from './api-market-organization-profile-products-dto.adapter';
import { apiOrganizationProfileSectionInfoAltDtoAdapter } from './api-organization-profile-section-info.adapter';
import { apiTagViewDtoAdapter } from './api-tag-view-dto.adapter';

export const apiMarketOrganizationCompanyProfileDtoAdapter = (source?: MarketOrganizationCompanyProfile | null): ApiMarketOrganizationCompanyProfileDto => {
  return {
    Contacts: source?.contacts === null ? undefined : apiMarketOrganizationProfileContactsDtoAdapter(source?.contacts),
    DeliveryRegions: source?.deliveryRegions,
    Documents: source?.documents?.map((item) => apiMarketOrganizationProfileDocumentDtoAdapter(item)),
    Gallery: source?.gallery,
    HasCatalogAgreement: source?.hasCatalogAgreement,
    Images: source?.images === null ? undefined : apiMarketOrganizationProfileAppearanceDtoAdapter(source?.images),
    Industries: source?.industries?.map((item) => apiIndustryDtoAdapter(item)),
    Products: source?.products === null ? undefined : apiMarketOrganizationProfileProductsDtoAdapter(source?.products),
    ProfileSectionInfos: source?.profileSectionInfos?.map((item) => apiOrganizationProfileSectionInfoAltDtoAdapter(item)),
    Tags: source?.tags?.map((item) => apiTagViewDtoAdapter(item)),
    Videos: source?.videos,
  };
}
