import { ApiMarketOrganizationFullInfoDto } from '../../../swagger/models/api-market-organization-full-info-dto';
import { MarketOrganizationFullInfo } from '../../models/market-organization-full-info.interface';
import { adaptExternalSystemsSettingsToUI } from './external-systems-settings.adapter';
import { adaptMarketOfficeOrganizationContactToUI } from './market-office-organization-contact.adapter';
import { adaptMarketProtocolSettingsToUI } from './market-protocol-settings.adapter';
import { adaptMarketPurchaseSettingsToUI } from './market-purchase-settings.adapter';
import { adaptOrgAccreditationLevelToUI } from './org-accreditation-level.adapter';
import { adaptOrganizationActivityInfoToUI } from './organization-activity-info.adapter';
import { adaptOrganizationBankInfoToUI } from './organization-bank-info.adapter';
import { adaptOrganizationContactsToUI } from './organization-contacts.adapter';
import { adaptOrganizationDescriptionToUI } from './organization-description.adapter';
import { adaptOrganizationDesignToUI } from './organization-design.adapter';
import { adaptOrganizationEmployeesInfoToUI } from './organization-employees-info.adapter';
import { adaptOrganizationProfileDocumentToUI } from './organization-profile-document.adapter';
import { adaptOrganizationTypeEnumToUI } from './organization-type-enum.adapter';
import { adaptRestrictionsToUI } from './restrictions.adapter';
import { adaptTagViewToUI } from './tag-view.adapter';

export function adaptMarketOrganizationFullInfoToUI(source?: ApiMarketOrganizationFullInfoDto | null): MarketOrganizationFullInfo {
  return {
    activityInfo: adaptOrganizationActivityInfoToUI(source?.ActivityInfo),
    bankInfos: (source?.BankInfos ?? []).map((item) => adaptOrganizationBankInfoToUI(item)),
    categories: source?.Categories ?? [],
    contacts: adaptOrganizationContactsToUI(source?.Contacts),
    description: adaptOrganizationDescriptionToUI(source?.Description),
    design: adaptOrganizationDesignToUI(source?.Design),
    director: source?.Director ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptOrganizationProfileDocumentToUI(item)),
    domainName: source?.DomainName ?? '',
    email: source?.Email ?? '',
    employeesInfo: adaptOrganizationEmployeesInfoToUI(source?.EmployeesInfo),
    externalSystemsSettings: adaptExternalSystemsSettingsToUI(source?.ExternalSystemsSettings),
    guid: source?.Guid ?? '',
    id: source?.Id ?? 0,
    industries: source?.Industries ?? [],
    inn: source?.Inn ?? '',
    instagram: source?.Instagram ?? '',
    isExporter: source?.IsExporter ?? false,
    isManufacturer: source?.IsManufacturer ?? false,
    isSmb: source?.IsSmb ?? false,
    kpp: source?.Kpp ?? '',
    name: source?.Name ?? '',
    offices: (source?.Offices ?? []).map((item) => adaptMarketOfficeOrganizationContactToUI(item)),
    ogrn: source?.Ogrn ?? '',
    okato: source?.Okato ?? '',
    okpo: source?.Okpo ?? '',
    okved: source?.Okved ?? '',
    orgAccreditationLevel: adaptOrgAccreditationLevelToUI(source?.OrgAccreditationLevel),
    phoneNumber: source?.PhoneNumber ?? '',
    protocolSettings: adaptMarketProtocolSettingsToUI(source?.ProtocolSettings),
    purchaseSettings: adaptMarketPurchaseSettingsToUI(source?.PurchaseSettings),
    restrictions: adaptRestrictionsToUI(source?.Restrictions),
    tags: (source?.Tags ?? []).map((item) => adaptTagViewToUI(item)),
    telegram: source?.Telegram ?? '',
    type: adaptOrganizationTypeEnumToUI(source?.Type),
    videoUrls: source?.VideoUrls ?? [],
    vkontakte: source?.Vkontakte ?? '',
    webSiteUrl: source?.WebSiteUrl ?? '',
    youtube: source?.Youtube ?? '',
  };
}
