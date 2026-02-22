import { ApiMarketOrganizationFullInfoDto } from '../../../swagger/models/api-market-organization-full-info-dto';
import { MarketOrganizationFullInfo } from '../../models/market-organization-full-info.interface';
import { externalSystemsSettingsAdapter } from './external-systems-settings.adapter';
import { marketOfficeOrganizationContactAdapter } from './market-office-organization-contact.adapter';
import { marketProtocolSettingsAdapter } from './market-protocol-settings.adapter';
import { marketPurchaseSettingsAdapter } from './market-purchase-settings.adapter';
import { orgAccreditationLevelAdapter } from './org-accreditation-level.adapter';
import { organizationActivityInfoAdapter } from './organization-activity-info.adapter';
import { organizationBankInfoAdapter } from './organization-bank-info.adapter';
import { organizationContactsAdapter } from './organization-contacts.adapter';
import { organizationDescriptionAdapter } from './organization-description.adapter';
import { organizationDesignAdapter } from './organization-design.adapter';
import { organizationEmployeesInfoAdapter } from './organization-employees-info.adapter';
import { organizationProfileDocumentAdapter } from './organization-profile-document.adapter';
import { organizationTypeEnumAdapter } from '../enums/organization-type-enum.adapter';
import { restrictionsAdapter } from './restrictions.adapter';
import { tagViewAdapter } from './tag-view.adapter';

export const marketOrganizationFullInfoAdapter = (source?: ApiMarketOrganizationFullInfoDto | null): MarketOrganizationFullInfo => {
  return {
    activityInfo: source?.ActivityInfo === null ? undefined : organizationActivityInfoAdapter(source?.ActivityInfo),
    bankInfos: source?.BankInfos?.map((item) => organizationBankInfoAdapter(item)),
    categories: source?.Categories,
    contacts: source?.Contacts === null ? undefined : organizationContactsAdapter(source?.Contacts),
    description: source?.Description === null ? undefined : organizationDescriptionAdapter(source?.Description),
    design: source?.Design === null ? undefined : organizationDesignAdapter(source?.Design),
    director: source?.Director,
    documents: source?.Documents?.map((item) => organizationProfileDocumentAdapter(item)),
    domainName: source?.DomainName,
    email: source?.Email,
    employeesInfo: source?.EmployeesInfo === null ? undefined : organizationEmployeesInfoAdapter(source?.EmployeesInfo),
    externalSystemsSettings: source?.ExternalSystemsSettings === null ? undefined : externalSystemsSettingsAdapter(source?.ExternalSystemsSettings),
    guid: source?.Guid,
    id: source?.Id,
    industries: source?.Industries,
    inn: source?.Inn,
    instagram: source?.Instagram,
    isExporter: source?.IsExporter,
    isManufacturer: source?.IsManufacturer,
    isSmb: source?.IsSmb,
    kpp: source?.Kpp,
    name: source?.Name,
    offices: source?.Offices?.map((item) => marketOfficeOrganizationContactAdapter(item)),
    ogrn: source?.Ogrn,
    okato: source?.Okato,
    okpo: source?.Okpo,
    okved: source?.Okved,
    orgAccreditationLevel: source?.OrgAccreditationLevel === null ? undefined : orgAccreditationLevelAdapter(source?.OrgAccreditationLevel),
    phoneNumber: source?.PhoneNumber,
    protocolSettings: source?.ProtocolSettings === null ? undefined : marketProtocolSettingsAdapter(source?.ProtocolSettings),
    purchaseSettings: source?.PurchaseSettings === null ? undefined : marketPurchaseSettingsAdapter(source?.PurchaseSettings),
    restrictions: source?.Restrictions === null ? undefined : restrictionsAdapter(source?.Restrictions),
    tags: source?.Tags?.map((item) => tagViewAdapter(item)),
    telegram: source?.Telegram,
    type: source?.Type === null ? undefined : organizationTypeEnumAdapter(source?.Type),
    videoUrls: source?.VideoUrls,
    vkontakte: source?.Vkontakte,
    webSiteUrl: source?.WebSiteUrl,
    youtube: source?.Youtube,
  };
}
