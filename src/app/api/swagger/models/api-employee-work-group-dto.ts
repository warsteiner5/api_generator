/* tslint:disable */
/* eslint-disable */
import { ApiEmployeeRoleDto } from '../models/api-employee-role-dto';
export interface ApiEmployeeWorkGroupDto {
  Id?: number;
  Name?: string | null;
  Roles?: Array<ApiEmployeeRoleDto> | null;
}
