import { CreateOrganizationManager } from './create-organization-manager.interface';
import { OrganizationTypeEnum } from '../enums/organization-type.enum';

export interface CreateOrganization {
  address: string;
  contactPerson: string;
  director: string;
  email: string;
  fullName: string;
  inn: string;
  kpp: string;
  manager: CreateOrganizationManager;
  name: string;
  ogrn: string;
  organizationType: OrganizationTypeEnum;
  phone: string;
  site: string;
  sourceType: number;
}
