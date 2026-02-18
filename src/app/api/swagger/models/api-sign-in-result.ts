/* tslint:disable */
/* eslint-disable */
import { ApiAuthStatusEnum } from '../models/api-auth-status-enum';
import { ApiUserInOrganizationDto } from '../models/api-user-in-organization-dto';
export interface ApiSignInResultAltDto {
  AccessToken?: string | null;
  ErrorMessage?: string | null;
  Status?: ApiAuthStatusEnum;
  UserInOrganizations?: Array<ApiUserInOrganizationDto> | null;
}
