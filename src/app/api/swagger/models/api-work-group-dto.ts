/* tslint:disable */
/* eslint-disable */
import { ApiPermissionDto } from '../models/api-permission-dto';
export interface ApiWorkGroupDto {
  Code?: string | null;
  Id?: number;
  IsDefault?: boolean;
  Name?: string | null;
  Permissions?: Array<ApiPermissionDto> | null;
}
