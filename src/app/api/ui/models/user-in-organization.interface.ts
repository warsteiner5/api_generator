import { OrganizationTypeEnum } from '../enums/organization-type.enum';

export interface UserInOrganization {
  guid: string;
  inn: string;
  kpp: string;
  name: string;
  organizationType: OrganizationTypeEnum;
}
