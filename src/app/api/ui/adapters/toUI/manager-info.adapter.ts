import { ApiManagerInfoDto } from '../../../swagger/models/api-manager-info-dto';
import { ManagerInfo } from '../../models/manager-info.interface';

export function adaptManagerInfoToUI(source?: ApiManagerInfoDto | null): ManagerInfo {
  return {
    employeeId: source?.EmployeeId ?? 0,
    firstName: source?.FirstName ?? '',
    lastName: source?.LastName ?? '',
    middleName: source?.MiddleName ?? '',
    userId: source?.UserId ?? '',
  };
}
