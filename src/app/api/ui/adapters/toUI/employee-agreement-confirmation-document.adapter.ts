import { ApiEmployeeAgreementConfirmationDocumentDto } from '../../../swagger/models/api-employee-agreement-confirmation-document-dto';
import { EmployeeAgreementConfirmationDocument } from '../../models/employee-agreement-confirmation-document.interface';
import { adaptDocumentTypesAltEnumToUI } from './document-types-alt-enum.adapter';

export function adaptEmployeeAgreementConfirmationDocumentToUI(source?: ApiEmployeeAgreementConfirmationDocumentDto | null): EmployeeAgreementConfirmationDocument {
  return {
    documentType: adaptDocumentTypesAltEnumToUI(source?.DocumentType),
    fileId: source?.FileId ?? '',
  };
}
