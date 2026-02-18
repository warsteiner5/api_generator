/* tslint:disable */
/* eslint-disable */
import { ApiIndustryDto } from '../models/api-industry-dto';
import { ApiOrganizationCountryAltEnum } from '../models/api-organization-country';
import { ApiOrganizationTypeEnum } from '../models/api-organization-type-enum';
import { ApiTagViewDto } from '../models/api-tag-view-dto';
export interface ApiCompanyCatalogOrganizationDto {
  Country?: ApiOrganizationCountryAltEnum;
  ForeignParticipantId?: string | null;
  Guid?: string;
  HasCatalogAgreement?: boolean;
  Industries?: Array<ApiIndustryDto> | null;
  Inn?: string | null;
  IsFavorite?: boolean;
  Kpp?: string | null;
  LogoGuid?: string | null;
  Name?: string | null;
  ParticipantOfferCount?: number;
  RegionCode?: string | null;
  Tags?: Array<ApiTagViewDto> | null;
  Type?: ApiOrganizationTypeEnum;
}
