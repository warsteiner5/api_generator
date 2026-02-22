import { ApiEmployeeItemDto } from '../../../swagger/models/api-employee-item-dto';
import { EmployeeItem } from '../../models/employee-item.interface';
import { employeeRoleAdapter } from './employee-role.adapter';

export const employeeItemAdapter = (source?: ApiEmployeeItemDto | null): EmployeeItem => {
  return {
    customerEmail: source?.CustomerEmail,
    firstName: source?.FirstName,
    hasDigitalSignature: source?.HasDigitalSignature,
    id: source?.Id,
    isActive: source?.IsActive,
    lastName: source?.LastName,
    middleName: source?.MiddleName,
    phoneNumber: source?.PhoneNumber,
    roles: source?.Roles?.map((item) => employeeRoleAdapter(item)),
    supplierEmail: source?.SupplierEmail,
  };
}
