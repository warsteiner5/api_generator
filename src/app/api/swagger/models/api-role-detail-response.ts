/* tslint:disable */
/* eslint-disable */
import { ApiRolePermissionGroupDto } from '../models/api-role-permission-group-dto';
export interface ApiRoleDetailResponseAltDto {
  Description?: string | null;
  Id?: number;
  Name?: string | null;
  PermissionGroups?: Array<ApiRolePermissionGroupDto> | null;
}
