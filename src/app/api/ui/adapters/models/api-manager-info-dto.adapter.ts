import { ManagerInfo } from '../../models/manager-info.interface';
import { ApiManagerInfoDto } from '../../../swagger/models/api-manager-info-dto';

export const apiManagerInfoDtoAdapter = (source?: ManagerInfo | null): ApiManagerInfoDto => {
  return {
    EmployeeId: source?.employeeId,
    FirstName: source?.firstName,
    LastName: source?.lastName,
    MiddleName: source?.middleName,
    UserId: source?.userId,
  };
}
