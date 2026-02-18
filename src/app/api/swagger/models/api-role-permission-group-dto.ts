/* tslint:disable */
/* eslint-disable */
import { ApiRolePermissionDto } from '../models/api-role-permission-dto';
export interface ApiRolePermissionGroupDto {
  Id?: number;
  Name?: string | null;
  Permissions?: Array<ApiRolePermissionDto> | null;
}
