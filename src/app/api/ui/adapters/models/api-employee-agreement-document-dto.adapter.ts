import { EmployeeAgreementDocument } from '../../models/employee-agreement-document.interface';
import { ApiEmployeeAgreementDocumentDto } from '../../../swagger/models/api-employee-agreement-document-dto';
import { apiDocumentTypesAltEnumAdapter } from '../enums/api-document-types.adapter';

export const apiEmployeeAgreementDocumentDtoAdapter = (source?: EmployeeAgreementDocument | null): ApiEmployeeAgreementDocumentDto => {
  return {
    DocumentType: source?.documentType === null ? undefined : apiDocumentTypesAltEnumAdapter(source?.documentType),
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
  };
}
