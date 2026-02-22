import { MarketOrganizationFullInfo } from '../../models/market-organization-full-info.interface';
import { ApiMarketOrganizationFullInfoDto } from '../../../swagger/models/api-market-organization-full-info-dto';
import { apiExternalSystemsSettingsDtoAdapter } from './api-external-systems-settings-dto.adapter';
import { apiMarketOfficeOrganizationContactDtoAdapter } from './api-market-office-organization-contact-dto.adapter';
import { apiMarketProtocolSettingsDtoAdapter } from './api-market-protocol-settings-dto.adapter';
import { apiMarketPurchaseSettingsDtoAdapter } from './api-market-purchase-settings-dto.adapter';
import { apiOrgAccreditationLevelDtoAdapter } from './api-org-accreditation-level-dto.adapter';
import { apiOrganizationActivityInfoDtoAdapter } from './api-organization-activity-info-dto.adapter';
import { apiOrganizationBankInfoDtoAdapter } from './api-organization-bank-info-dto.adapter';
import { apiOrganizationContactsDtoAdapter } from './api-organization-contacts-dto.adapter';
import { apiOrganizationDescriptionDtoAdapter } from './api-organization-description-dto.adapter';
import { apiOrganizationDesignDtoAdapter } from './api-organization-design-dto.adapter';
import { apiOrganizationEmployeesInfoDtoAdapter } from './api-organization-employees-info-dto.adapter';
import { apiOrganizationProfileDocumentDtoAdapter } from './api-organization-profile-document-dto.adapter';
import { apiOrganizationTypeEnumAdapter } from '../enums/api-organization-type-enum.adapter';
import { apiRestrictionsDtoAdapter } from './api-restrictions-dto.adapter';
import { apiTagViewDtoAdapter } from './api-tag-view-dto.adapter';

export const apiMarketOrganizationFullInfoDtoAdapter = (source?: MarketOrganizationFullInfo | null): ApiMarketOrganizationFullInfoDto => {
  return {
    ActivityInfo: source?.activityInfo === null ? undefined : apiOrganizationActivityInfoDtoAdapter(source?.activityInfo),
    BankInfos: source?.bankInfos?.map((item) => apiOrganizationBankInfoDtoAdapter(item)),
    Categories: source?.categories,
    Contacts: source?.contacts === null ? undefined : apiOrganizationContactsDtoAdapter(source?.contacts),
    Description: source?.description === null ? undefined : apiOrganizationDescriptionDtoAdapter(source?.description),
    Design: source?.design === null ? undefined : apiOrganizationDesignDtoAdapter(source?.design),
    Director: source?.director,
    Documents: source?.documents?.map((item) => apiOrganizationProfileDocumentDtoAdapter(item)),
    DomainName: source?.domainName,
    Email: source?.email,
    EmployeesInfo: source?.employeesInfo === null ? undefined : apiOrganizationEmployeesInfoDtoAdapter(source?.employeesInfo),
    ExternalSystemsSettings: source?.externalSystemsSettings === null ? undefined : apiExternalSystemsSettingsDtoAdapter(source?.externalSystemsSettings),
    Guid: source?.guid,
    Id: source?.id,
    Industries: source?.industries,
    Inn: source?.inn,
    Instagram: source?.instagram,
    IsExporter: source?.isExporter,
    IsManufacturer: source?.isManufacturer,
    IsSmb: source?.isSmb,
    Kpp: source?.kpp,
    Name: source?.name,
    Offices: source?.offices?.map((item) => apiMarketOfficeOrganizationContactDtoAdapter(item)),
    Ogrn: source?.ogrn,
    Okato: source?.okato,
    Okpo: source?.okpo,
    Okved: source?.okved,
    OrgAccreditationLevel: source?.orgAccreditationLevel === null ? undefined : apiOrgAccreditationLevelDtoAdapter(source?.orgAccreditationLevel),
    PhoneNumber: source?.phoneNumber,
    ProtocolSettings: source?.protocolSettings === null ? undefined : apiMarketProtocolSettingsDtoAdapter(source?.protocolSettings),
    PurchaseSettings: source?.purchaseSettings === null ? undefined : apiMarketPurchaseSettingsDtoAdapter(source?.purchaseSettings),
    Restrictions: source?.restrictions === null ? undefined : apiRestrictionsDtoAdapter(source?.restrictions),
    Tags: source?.tags?.map((item) => apiTagViewDtoAdapter(item)),
    Telegram: source?.telegram,
    Type: source?.type === null ? undefined : apiOrganizationTypeEnumAdapter(source?.type),
    VideoUrls: source?.videoUrls,
    Vkontakte: source?.vkontakte,
    WebSiteUrl: source?.webSiteUrl,
    Youtube: source?.youtube,
  };
}
