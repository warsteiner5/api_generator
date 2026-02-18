import { AuthExternalSystemsAltEnum } from '../enums/auth-external-systems-alt.enum';

export interface AuthExternalOrganization {
  authExternalOrganizationId: string;
  authExternalSystem: AuthExternalSystemsAltEnum;
}
