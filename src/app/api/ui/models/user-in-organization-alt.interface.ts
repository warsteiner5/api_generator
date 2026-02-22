import { AuthExternalOrganization } from './auth-external-organization.interface';

// @ts-ignore
export interface UserInOrganizationAlt {
  authExternalOrganizations: AuthExternalOrganization[];
  guid: string;
  id: number;
  name: string;
}
