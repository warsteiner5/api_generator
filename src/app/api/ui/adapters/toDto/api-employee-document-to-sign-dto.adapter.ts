import { EmployeeDocumentToSign } from '../../models/employee-document-to-sign.interface';
import { ApiEmployeeDocumentToSignDto } from '../../../swagger/models/api-employee-document-to-sign-dto';

export function adaptApiEmployeeDocumentToSignDto(source?: EmployeeDocumentToSign | null): ApiEmployeeDocumentToSignDto {
  return {
    FileDataToSign: source?.fileDataToSign,
    FileGuid: source?.fileGuid,
    IsHash: source?.isHash,
  };
}
