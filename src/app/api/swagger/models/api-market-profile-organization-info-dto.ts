/* tslint:disable */
/* eslint-disable */
import { ApiExternalSystemToSendCartDto } from '../models/api-external-system-to-send-cart-dto';
import { ApiOrgAccreditationLevelDto } from '../models/api-org-accreditation-level-dto';
import { ApiOrganizationTypeEnum } from '../models/api-organization-type-enum';
export interface ApiMarketProfileOrganizationInfoDto {
  ExternalSystemsToSendCart?: Array<ApiExternalSystemToSendCartDto> | null;
  Guid?: string;
  Id?: number;
  Inn?: string | null;
  IsHomeRegionInfoMessageShow?: boolean;
  IsSendCartToExternalSystemsEnabled?: boolean;
  IsSmsp?: boolean;
  IsTestOrganization?: boolean;
  Kpp?: string | null;
  Name?: string | null;
  OrgAccreditationLevel?: ApiOrgAccreditationLevelDto | null;
  OrganizationType?: ApiOrganizationTypeEnum;
  ShortName?: string | null;
  Unp?: string | null;
  UserId?: number;
}
