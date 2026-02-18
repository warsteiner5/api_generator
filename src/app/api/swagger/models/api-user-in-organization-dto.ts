/* tslint:disable */
/* eslint-disable */
import { ApiOrganizationTypeEnum } from '../models/api-organization-type-enum';
export interface ApiUserInOrganizationDto {
  Guid?: string;
  Inn?: string | null;
  Kpp?: string | null;
  Name?: string | null;
  OrganizationType?: ApiOrganizationTypeEnum;
}
