import { UpdateSignedEmployee } from '../../models/update-signed-employee.interface';
import { ApiUpdateSignedEmployeeDto } from '../../../swagger/models/api-update-signed-employee-dto';

export function adaptApiUpdateSignedEmployeeDto(source?: UpdateSignedEmployee | null): ApiUpdateSignedEmployeeDto {
  return {
    EmployeeId: source?.employeeId,
    signatureForEmployeeFilesObject: source?.signatureForEmployeeFilesObject as any,
    signatureForEmployeeObject: source?.signatureForEmployeeObject,
    signdata: source?.signdata,
  };
}
