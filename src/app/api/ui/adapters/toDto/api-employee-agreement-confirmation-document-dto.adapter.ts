import { EmployeeAgreementConfirmationDocument } from '../../models/employee-agreement-confirmation-document.interface';
import { ApiEmployeeAgreementConfirmationDocumentDto } from '../../../swagger/models/api-employee-agreement-confirmation-document-dto';
import { adaptApiDocumentTypesAltEnum } from './api-document-types.adapter';

export function adaptApiEmployeeAgreementConfirmationDocumentDto(source?: EmployeeAgreementConfirmationDocument | null): ApiEmployeeAgreementConfirmationDocumentDto {
  return {
    DocumentType: adaptApiDocumentTypesAltEnum(source?.documentType),
    FileId: source?.fileId,
  };
}
