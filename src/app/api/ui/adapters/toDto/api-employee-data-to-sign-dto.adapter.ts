import { EmployeeDataToSign } from '../../models/employee-data-to-sign.interface';
import { ApiEmployeeDataToSignDto } from '../../../swagger/models/api-employee-data-to-sign-dto';
import { adaptApiEmployeeDocumentToSignDto } from './api-employee-document-to-sign-dto.adapter';

export function adaptApiEmployeeDataToSignDto(source?: EmployeeDataToSign | null): ApiEmployeeDataToSignDto {
  return {
    EmployeeToSign: source?.employeeToSign,
    FilesToSign: (source?.filesToSign ?? []).map((item) => adaptApiEmployeeDocumentToSignDto(item)),
  };
}
