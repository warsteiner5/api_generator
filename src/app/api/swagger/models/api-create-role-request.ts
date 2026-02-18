/* tslint:disable */
/* eslint-disable */
import { ApiRolePermissionGroupDto } from '../models/api-role-permission-group-dto';
export interface ApiCreateRoleRequestAltDto {
  Description?: string | null;
  Name?: string | null;
  PermissionGroups?: Array<ApiRolePermissionGroupDto> | null;
}
