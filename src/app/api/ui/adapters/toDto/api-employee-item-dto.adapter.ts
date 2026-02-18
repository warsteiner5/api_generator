import { EmployeeItem } from '../../models/employee-item.interface';
import { ApiEmployeeItemDto } from '../../../swagger/models/api-employee-item-dto';
import { adaptApiEmployeeRoleDto } from './api-employee-role-dto.adapter';

export function adaptApiEmployeeItemDto(source?: EmployeeItem | null): ApiEmployeeItemDto {
  return {
    CustomerEmail: source?.customerEmail,
    FirstName: source?.firstName,
    HasDigitalSignature: source?.hasDigitalSignature,
    Id: source?.id,
    IsActive: source?.isActive,
    LastName: source?.lastName,
    MiddleName: source?.middleName,
    PhoneNumber: source?.phoneNumber,
    Roles: (source?.roles ?? []).map((item) => adaptApiEmployeeRoleDto(item)),
    SupplierEmail: source?.supplierEmail,
  };
}
