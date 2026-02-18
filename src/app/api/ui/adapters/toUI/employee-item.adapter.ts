import { ApiEmployeeItemDto } from '../../../swagger/models/api-employee-item-dto';
import { EmployeeItem } from '../../models/employee-item.interface';
import { adaptEmployeeRoleToUI } from './employee-role.adapter';

export function adaptEmployeeItemToUI(source?: ApiEmployeeItemDto | null): EmployeeItem {
  return {
    customerEmail: source?.CustomerEmail ?? '',
    firstName: source?.FirstName ?? '',
    hasDigitalSignature: source?.HasDigitalSignature ?? false,
    id: source?.Id ?? 0,
    isActive: source?.IsActive ?? false,
    lastName: source?.LastName ?? '',
    middleName: source?.MiddleName ?? '',
    phoneNumber: source?.PhoneNumber ?? '',
    roles: (source?.Roles ?? []).map((item) => adaptEmployeeRoleToUI(item)),
    supplierEmail: source?.SupplierEmail ?? '',
  };
}
