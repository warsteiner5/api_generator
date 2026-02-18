import { ApiEmployeeAgreementDocumentDto } from '../../../swagger/models/api-employee-agreement-document-dto';
import { EmployeeAgreementDocument } from '../../models/employee-agreement-document.interface';
import { adaptDocumentTypesAltEnumToUI } from './document-types-alt-enum.adapter';

export function adaptEmployeeAgreementDocumentToUI(source?: ApiEmployeeAgreementDocumentDto | null): EmployeeAgreementDocument {
  return {
    documentType: adaptDocumentTypesAltEnumToUI(source?.DocumentType),
    fileGuid: source?.FileGuid ?? '',
    fileName: source?.FileName ?? '',
  };
}
