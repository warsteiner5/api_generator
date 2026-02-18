import { AuthExternalOrganization } from './auth-external-organization.interface';

export interface UserInOrganizationAlt {
  authExternalOrganizations: AuthExternalOrganization[];
  guid: string;
  id: number;
  name: string;
}
