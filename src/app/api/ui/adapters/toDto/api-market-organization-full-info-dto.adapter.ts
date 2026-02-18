import { MarketOrganizationFullInfo } from '../../models/market-organization-full-info.interface';
import { ApiMarketOrganizationFullInfoDto } from '../../../swagger/models/api-market-organization-full-info-dto';
import { adaptApiExternalSystemsSettingsDto } from './api-external-systems-settings-dto.adapter';
import { adaptApiMarketOfficeOrganizationContactDto } from './api-market-office-organization-contact-dto.adapter';
import { adaptApiMarketProtocolSettingsDto } from './api-market-protocol-settings-dto.adapter';
import { adaptApiMarketPurchaseSettingsDto } from './api-market-purchase-settings-dto.adapter';
import { adaptApiOrgAccreditationLevelDto } from './api-org-accreditation-level-dto.adapter';
import { adaptApiOrganizationActivityInfoDto } from './api-organization-activity-info-dto.adapter';
import { adaptApiOrganizationBankInfoDto } from './api-organization-bank-info-dto.adapter';
import { adaptApiOrganizationContactsDto } from './api-organization-contacts-dto.adapter';
import { adaptApiOrganizationDescriptionDto } from './api-organization-description-dto.adapter';
import { adaptApiOrganizationDesignDto } from './api-organization-design-dto.adapter';
import { adaptApiOrganizationEmployeesInfoDto } from './api-organization-employees-info-dto.adapter';
import { adaptApiOrganizationProfileDocumentDto } from './api-organization-profile-document-dto.adapter';
import { adaptApiOrganizationTypeEnum } from './api-organization-type-enum.adapter';
import { adaptApiRestrictionsDto } from './api-restrictions-dto.adapter';
import { adaptApiTagViewDto } from './api-tag-view-dto.adapter';

export function adaptApiMarketOrganizationFullInfoDto(source?: MarketOrganizationFullInfo | null): ApiMarketOrganizationFullInfoDto {
  return {
    ActivityInfo: adaptApiOrganizationActivityInfoDto(source?.activityInfo),
    BankInfos: (source?.bankInfos ?? []).map((item) => adaptApiOrganizationBankInfoDto(item)),
    Categories: source?.categories ?? [],
    Contacts: adaptApiOrganizationContactsDto(source?.contacts),
    Description: adaptApiOrganizationDescriptionDto(source?.description),
    Design: adaptApiOrganizationDesignDto(source?.design),
    Director: source?.director,
    Documents: (source?.documents ?? []).map((item) => adaptApiOrganizationProfileDocumentDto(item)),
    DomainName: source?.domainName,
    Email: source?.email,
    EmployeesInfo: adaptApiOrganizationEmployeesInfoDto(source?.employeesInfo),
    ExternalSystemsSettings: adaptApiExternalSystemsSettingsDto(source?.externalSystemsSettings),
    Guid: source?.guid,
    Id: source?.id,
    Industries: source?.industries ?? [],
    Inn: source?.inn,
    Instagram: source?.instagram,
    IsExporter: source?.isExporter,
    IsManufacturer: source?.isManufacturer,
    IsSmb: source?.isSmb,
    Kpp: source?.kpp,
    Name: source?.name,
    Offices: (source?.offices ?? []).map((item) => adaptApiMarketOfficeOrganizationContactDto(item)),
    Ogrn: source?.ogrn,
    Okato: source?.okato,
    Okpo: source?.okpo,
    Okved: source?.okved,
    OrgAccreditationLevel: adaptApiOrgAccreditationLevelDto(source?.orgAccreditationLevel),
    PhoneNumber: source?.phoneNumber,
    ProtocolSettings: adaptApiMarketProtocolSettingsDto(source?.protocolSettings),
    PurchaseSettings: adaptApiMarketPurchaseSettingsDto(source?.purchaseSettings),
    Restrictions: adaptApiRestrictionsDto(source?.restrictions),
    Tags: (source?.tags ?? []).map((item) => adaptApiTagViewDto(item)),
    Telegram: source?.telegram,
    Type: adaptApiOrganizationTypeEnum(source?.type),
    VideoUrls: source?.videoUrls ?? [],
    Vkontakte: source?.vkontakte,
    WebSiteUrl: source?.webSiteUrl,
    Youtube: source?.youtube,
  };
}
