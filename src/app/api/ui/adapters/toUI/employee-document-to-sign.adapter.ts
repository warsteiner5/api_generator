import { ApiEmployeeDocumentToSignDto } from '../../../swagger/models/api-employee-document-to-sign-dto';
import { EmployeeDocumentToSign } from '../../models/employee-document-to-sign.interface';

export function adaptEmployeeDocumentToSignToUI(source?: ApiEmployeeDocumentToSignDto | null): EmployeeDocumentToSign {
  return {
    fileDataToSign: source?.FileDataToSign ?? '',
    fileGuid: source?.FileGuid ?? '',
    isHash: source?.IsHash ?? false,
  };
}
