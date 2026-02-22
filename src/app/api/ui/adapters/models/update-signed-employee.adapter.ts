import { ApiUpdateSignedEmployeeDto } from '../../../swagger/models/api-update-signed-employee-dto';
import { UpdateSignedEmployee } from '../../models/update-signed-employee.interface';

export const updateSignedEmployeeAdapter = (source?: ApiUpdateSignedEmployeeDto | null): UpdateSignedEmployee => {
  return {
    employeeId: source?.EmployeeId,
    signatureForEmployeeFilesObject: source?.signatureForEmployeeFilesObject as any,
    signatureForEmployeeObject: source?.signatureForEmployeeObject,
    signdata: source?.signdata,
  };
}
