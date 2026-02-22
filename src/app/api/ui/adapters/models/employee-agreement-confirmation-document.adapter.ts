import { ApiEmployeeAgreementConfirmationDocumentDto } from '../../../swagger/models/api-employee-agreement-confirmation-document-dto';
import { EmployeeAgreementConfirmationDocument } from '../../models/employee-agreement-confirmation-document.interface';
import { documentTypesAltEnumAdapter } from '../enums/document-types-alt-enum.adapter';

export const employeeAgreementConfirmationDocumentAdapter = (source?: ApiEmployeeAgreementConfirmationDocumentDto | null): EmployeeAgreementConfirmationDocument => {
  return {
    documentType: source?.DocumentType === null ? undefined : documentTypesAltEnumAdapter(source?.DocumentType),
    fileId: source?.FileId,
  };
}
