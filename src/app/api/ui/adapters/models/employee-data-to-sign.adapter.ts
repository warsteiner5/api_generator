import { ApiEmployeeDataToSignDto } from '../../../swagger/models/api-employee-data-to-sign-dto';
import { EmployeeDataToSign } from '../../models/employee-data-to-sign.interface';
import { employeeDocumentToSignAdapter } from './employee-document-to-sign.adapter';

export const employeeDataToSignAdapter = (source?: ApiEmployeeDataToSignDto | null): EmployeeDataToSign => {
  return {
    employeeToSign: source?.EmployeeToSign,
    filesToSign: source?.FilesToSign?.map((item) => employeeDocumentToSignAdapter(item)),
  };
}
