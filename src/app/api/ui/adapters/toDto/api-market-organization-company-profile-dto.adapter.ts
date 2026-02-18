import { MarketOrganizationCompanyProfile } from '../../models/market-organization-company-profile.interface';
import { ApiMarketOrganizationCompanyProfileDto } from '../../../swagger/models/api-market-organization-company-profile-dto';
import { adaptApiIndustryDto } from './api-industry-dto.adapter';
import { adaptApiMarketOrganizationProfileAppearanceDto } from './api-market-organization-profile-appearance-dto.adapter';
import { adaptApiMarketOrganizationProfileContactsDto } from './api-market-organization-profile-contacts-dto.adapter';
import { adaptApiMarketOrganizationProfileDocumentDto } from './api-market-organization-profile-document-dto.adapter';
import { adaptApiMarketOrganizationProfileProductsDto } from './api-market-organization-profile-products-dto.adapter';
import { adaptApiOrganizationProfileSectionInfoAltDto } from './api-organization-profile-section-info.adapter';
import { adaptApiTagViewDto } from './api-tag-view-dto.adapter';

export function adaptApiMarketOrganizationCompanyProfileDto(source?: MarketOrganizationCompanyProfile | null): ApiMarketOrganizationCompanyProfileDto {
  return {
    Contacts: adaptApiMarketOrganizationProfileContactsDto(source?.contacts),
    DeliveryRegions: source?.deliveryRegions ?? [],
    Documents: (source?.documents ?? []).map((item) => adaptApiMarketOrganizationProfileDocumentDto(item)),
    Gallery: source?.gallery ?? [],
    HasCatalogAgreement: source?.hasCatalogAgreement,
    Images: adaptApiMarketOrganizationProfileAppearanceDto(source?.images),
    Industries: (source?.industries ?? []).map((item) => adaptApiIndustryDto(item)),
    Products: adaptApiMarketOrganizationProfileProductsDto(source?.products),
    ProfileSectionInfos: (source?.profileSectionInfos ?? []).map((item) => adaptApiOrganizationProfileSectionInfoAltDto(item)),
    Tags: (source?.tags ?? []).map((item) => adaptApiTagViewDto(item)),
    Videos: source?.videos ?? [],
  };
}
