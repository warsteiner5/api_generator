import { ApiEmployeeAgreementDocumentDto } from '../../../swagger/models/api-employee-agreement-document-dto';
import { EmployeeAgreementDocument } from '../../models/employee-agreement-document.interface';
import { documentTypesAltEnumAdapter } from '../enums/document-types-alt-enum.adapter';

export const employeeAgreementDocumentAdapter = (source?: ApiEmployeeAgreementDocumentDto | null): EmployeeAgreementDocument => {
  return {
    documentType: source?.DocumentType === null ? undefined : documentTypesAltEnumAdapter(source?.DocumentType),
    fileGuid: source?.FileGuid,
    fileName: source?.FileName,
  };
}
