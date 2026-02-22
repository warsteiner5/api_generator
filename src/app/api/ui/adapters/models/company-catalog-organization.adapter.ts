import { ApiCompanyCatalogOrganizationDto } from '../../../swagger/models/api-company-catalog-organization-dto';
import { CompanyCatalogOrganization } from '../../models/company-catalog-organization.interface';
import { industryAdapter } from './industry.adapter';
import { organizationCountryAltEnumAdapter } from '../enums/organization-country-alt-enum.adapter';
import { organizationTypeEnumAdapter } from '../enums/organization-type-enum.adapter';
import { tagViewAdapter } from './tag-view.adapter';

export const companyCatalogOrganizationAdapter = (source?: ApiCompanyCatalogOrganizationDto | null): CompanyCatalogOrganization => {
  return {
    country: source?.Country === null ? undefined : organizationCountryAltEnumAdapter(source?.Country),
    foreignParticipantId: source?.ForeignParticipantId,
    guid: source?.Guid,
    hasCatalogAgreement: source?.HasCatalogAgreement,
    industries: source?.Industries?.map((item) => industryAdapter(item)),
    inn: source?.Inn,
    isFavorite: source?.IsFavorite,
    kpp: source?.Kpp,
    logoGuid: source?.LogoGuid,
    name: source?.Name,
    participantOfferCount: source?.ParticipantOfferCount,
    regionCode: source?.RegionCode,
    tags: source?.Tags?.map((item) => tagViewAdapter(item)),
    type: source?.Type === null ? undefined : organizationTypeEnumAdapter(source?.Type),
  };
}
