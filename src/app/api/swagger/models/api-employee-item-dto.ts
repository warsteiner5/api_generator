/* tslint:disable */
/* eslint-disable */
import { ApiEmployeeRoleDto } from '../models/api-employee-role-dto';
export interface ApiEmployeeItemDto {
  CustomerEmail?: string | null;
  FirstName?: string | null;
  HasDigitalSignature?: boolean;
  Id?: number;
  IsActive?: boolean;
  LastName?: string | null;
  MiddleName?: string | null;
  PhoneNumber?: string | null;
  Roles?: Array<ApiEmployeeRoleDto> | null;
  SupplierEmail?: string | null;
}
