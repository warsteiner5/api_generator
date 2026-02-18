import { EmployeeAgreementDocument } from '../../models/employee-agreement-document.interface';
import { ApiEmployeeAgreementDocumentDto } from '../../../swagger/models/api-employee-agreement-document-dto';
import { adaptApiDocumentTypesAltEnum } from './api-document-types.adapter';

export function adaptApiEmployeeAgreementDocumentDto(source?: EmployeeAgreementDocument | null): ApiEmployeeAgreementDocumentDto {
  return {
    DocumentType: adaptApiDocumentTypesAltEnum(source?.documentType),
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
  };
}
