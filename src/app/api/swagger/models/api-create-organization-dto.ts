/* tslint:disable */
/* eslint-disable */
import { ApiCreateOrganizationManagerDto } from '../models/api-create-organization-manager-dto';
import { ApiOrganizationTypeEnum } from '../models/api-organization-type-enum';
export interface ApiCreateOrganizationDto {
  address?: string | null;
  contactPerson?: string | null;
  director?: string | null;
  email?: string | null;
  fullName?: string | null;
  inn?: string | null;
  kpp?: string | null;
  manager?: ApiCreateOrganizationManagerDto | null;
  name?: string | null;
  ogrn?: string | null;
  organizationType?: ApiOrganizationTypeEnum;
  phone?: string | null;
  site?: string | null;
  sourceType?: number;
}
