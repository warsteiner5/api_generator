/* tslint:disable */
/* eslint-disable */
import { ApiAuthExternalOrganizationDto } from '../models/api-auth-external-organization-dto';
export interface ApiUserInOrganizationAltDto {
  AuthExternalOrganizations?: Array<ApiAuthExternalOrganizationDto> | null;
  Guid?: string;
  Id?: number;
  Name?: string | null;
}
