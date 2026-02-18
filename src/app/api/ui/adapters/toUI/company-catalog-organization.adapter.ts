import { ApiCompanyCatalogOrganizationDto } from '../../../swagger/models/api-company-catalog-organization-dto';
import { CompanyCatalogOrganization } from '../../models/company-catalog-organization.interface';
import { adaptIndustryToUI } from './industry.adapter';
import { adaptOrganizationCountryAltEnumToUI } from './organization-country-alt-enum.adapter';
import { adaptOrganizationTypeEnumToUI } from './organization-type-enum.adapter';
import { adaptTagViewToUI } from './tag-view.adapter';

export function adaptCompanyCatalogOrganizationToUI(source?: ApiCompanyCatalogOrganizationDto | null): CompanyCatalogOrganization {
  return {
    country: adaptOrganizationCountryAltEnumToUI(source?.Country),
    foreignParticipantId: source?.ForeignParticipantId ?? '',
    guid: source?.Guid ?? '',
    hasCatalogAgreement: source?.HasCatalogAgreement ?? false,
    industries: (source?.Industries ?? []).map((item) => adaptIndustryToUI(item)),
    inn: source?.Inn ?? '',
    isFavorite: source?.IsFavorite ?? false,
    kpp: source?.Kpp ?? '',
    logoGuid: source?.LogoGuid ?? '',
    name: source?.Name ?? '',
    participantOfferCount: source?.ParticipantOfferCount ?? 0,
    regionCode: source?.RegionCode ?? '',
    tags: (source?.Tags ?? []).map((item) => adaptTagViewToUI(item)),
    type: adaptOrganizationTypeEnumToUI(source?.Type),
  };
}
