import { EmployeeItem } from '../../models/employee-item.interface';
import { ApiEmployeeItemDto } from '../../../swagger/models/api-employee-item-dto';
import { apiEmployeeRoleDtoAdapter } from './api-employee-role-dto.adapter';

export const apiEmployeeItemDtoAdapter = (source?: EmployeeItem | null): ApiEmployeeItemDto => {
  return {
    CustomerEmail: source?.customerEmail,
    FirstName: source?.firstName,
    HasDigitalSignature: source?.hasDigitalSignature,
    Id: source?.id,
    IsActive: source?.isActive,
    LastName: source?.lastName,
    MiddleName: source?.middleName,
    PhoneNumber: source?.phoneNumber,
    Roles: source?.roles?.map((item) => apiEmployeeRoleDtoAdapter(item)),
    SupplierEmail: source?.supplierEmail,
  };
}
