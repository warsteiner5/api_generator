import { CompanyCatalogOrganization } from '../../models/company-catalog-organization.interface';
import { ApiCompanyCatalogOrganizationDto } from '../../../swagger/models/api-company-catalog-organization-dto';
import { apiIndustryDtoAdapter } from './api-industry-dto.adapter';
import { apiOrganizationCountryAltEnumAdapter } from '../enums/api-organization-country.adapter';
import { apiOrganizationTypeEnumAdapter } from '../enums/api-organization-type-enum.adapter';
import { apiTagViewDtoAdapter } from './api-tag-view-dto.adapter';

export const apiCompanyCatalogOrganizationDtoAdapter = (source?: CompanyCatalogOrganization | null): ApiCompanyCatalogOrganizationDto => {
  return {
    Country: source?.country === null ? undefined : apiOrganizationCountryAltEnumAdapter(source?.country),
    ForeignParticipantId: source?.foreignParticipantId,
    Guid: source?.guid,
    HasCatalogAgreement: source?.hasCatalogAgreement,
    Industries: source?.industries?.map((item) => apiIndustryDtoAdapter(item)),
    Inn: source?.inn,
    IsFavorite: source?.isFavorite,
    Kpp: source?.kpp,
    LogoGuid: source?.logoGuid,
    Name: source?.name,
    ParticipantOfferCount: source?.participantOfferCount,
    RegionCode: source?.regionCode,
    Tags: source?.tags?.map((item) => apiTagViewDtoAdapter(item)),
    Type: source?.type === null ? undefined : apiOrganizationTypeEnumAdapter(source?.type),
  };
}
