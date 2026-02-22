import { OrganizationTypeEnum } from '../enums/organization-type.enum';

// @ts-ignore
export interface UserInOrganization {
  guid: string;
  inn: string;
  kpp: string;
  name: string;
  organizationType: OrganizationTypeEnum;
}
