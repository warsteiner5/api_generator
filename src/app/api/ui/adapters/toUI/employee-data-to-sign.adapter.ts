import { ApiEmployeeDataToSignDto } from '../../../swagger/models/api-employee-data-to-sign-dto';
import { EmployeeDataToSign } from '../../models/employee-data-to-sign.interface';
import { adaptEmployeeDocumentToSignToUI } from './employee-document-to-sign.adapter';

export function adaptEmployeeDataToSignToUI(source?: ApiEmployeeDataToSignDto | null): EmployeeDataToSign {
  return {
    employeeToSign: source?.EmployeeToSign ?? '',
    filesToSign: (source?.FilesToSign ?? []).map((item) => adaptEmployeeDocumentToSignToUI(item)),
  };
}
