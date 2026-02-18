import { CompanyCatalogOrganization } from '../../models/company-catalog-organization.interface';
import { ApiCompanyCatalogOrganizationDto } from '../../../swagger/models/api-company-catalog-organization-dto';
import { adaptApiIndustryDto } from './api-industry-dto.adapter';
import { adaptApiOrganizationCountryAltEnum } from './api-organization-country.adapter';
import { adaptApiOrganizationTypeEnum } from './api-organization-type-enum.adapter';
import { adaptApiTagViewDto } from './api-tag-view-dto.adapter';

export function adaptApiCompanyCatalogOrganizationDto(source?: CompanyCatalogOrganization | null): ApiCompanyCatalogOrganizationDto {
  return {
    Country: adaptApiOrganizationCountryAltEnum(source?.country),
    ForeignParticipantId: source?.foreignParticipantId,
    Guid: source?.guid,
    HasCatalogAgreement: source?.hasCatalogAgreement,
    Industries: (source?.industries ?? []).map((item) => adaptApiIndustryDto(item)),
    Inn: source?.inn,
    IsFavorite: source?.isFavorite,
    Kpp: source?.kpp,
    LogoGuid: source?.logoGuid,
    Name: source?.name,
    ParticipantOfferCount: source?.participantOfferCount,
    RegionCode: source?.regionCode,
    Tags: (source?.tags ?? []).map((item) => adaptApiTagViewDto(item)),
    Type: adaptApiOrganizationTypeEnum(source?.type),
  };
}
