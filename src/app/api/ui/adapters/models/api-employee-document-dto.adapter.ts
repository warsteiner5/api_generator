import { EmployeeDocument } from '../../models/employee-document.interface';
import { ApiEmployeeDocumentDto } from '../../../swagger/models/api-employee-document-dto';
import { apiDocumentTypesAltEnumAdapter } from '../enums/api-document-types.adapter';

export const apiEmployeeDocumentDtoAdapter = (source?: EmployeeDocument | null): ApiEmployeeDocumentDto => {
  return {
    FileGuid: source?.fileGuid,
    Id: source?.id,
    Name: source?.name,
    Size: source?.size,
    Type: source?.type === null ? undefined : apiDocumentTypesAltEnumAdapter(source?.type),
  };
}
