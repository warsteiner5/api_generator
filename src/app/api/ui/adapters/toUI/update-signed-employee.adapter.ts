import { ApiUpdateSignedEmployeeDto } from '../../../swagger/models/api-update-signed-employee-dto';
import { UpdateSignedEmployee } from '../../models/update-signed-employee.interface';

export function adaptUpdateSignedEmployeeToUI(source?: ApiUpdateSignedEmployeeDto | null): UpdateSignedEmployee {
  return {
    employeeId: source?.EmployeeId ?? 0,
    signatureForEmployeeFilesObject: (source?.signatureForEmployeeFilesObject ?? null) as any,
    signatureForEmployeeObject: source?.signatureForEmployeeObject ?? '',
    signdata: source?.signdata ?? '',
  };
}
