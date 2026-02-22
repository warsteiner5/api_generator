import { ApiManagerInfoDto } from '../../../swagger/models/api-manager-info-dto';
import { ManagerInfo } from '../../models/manager-info.interface';

export const managerInfoAdapter = (source?: ApiManagerInfoDto | null): ManagerInfo => {
  return {
    employeeId: source?.EmployeeId,
    firstName: source?.FirstName,
    lastName: source?.LastName,
    middleName: source?.MiddleName,
    userId: source?.UserId,
  };
}
