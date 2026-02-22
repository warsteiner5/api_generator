import { EmployeeAgreementConfirmationDocument } from '../../models/employee-agreement-confirmation-document.interface';
import { ApiEmployeeAgreementConfirmationDocumentDto } from '../../../swagger/models/api-employee-agreement-confirmation-document-dto';
import { apiDocumentTypesAltEnumAdapter } from '../enums/api-document-types.adapter';

export const apiEmployeeAgreementConfirmationDocumentDtoAdapter = (source?: EmployeeAgreementConfirmationDocument | null): ApiEmployeeAgreementConfirmationDocumentDto => {
  return {
    DocumentType: source?.documentType === null ? undefined : apiDocumentTypesAltEnumAdapter(source?.documentType),
    FileId: source?.fileId,
  };
}
