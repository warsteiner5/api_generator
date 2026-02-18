import { EmployeeDocument } from '../../models/employee-document.interface';
import { ApiEmployeeDocumentDto } from '../../../swagger/models/api-employee-document-dto';
import { adaptApiDocumentTypesAltEnum } from './api-document-types.adapter';

export function adaptApiEmployeeDocumentDto(source?: EmployeeDocument | null): ApiEmployeeDocumentDto {
  return {
    FileGuid: source?.fileGuid,
    Id: source?.id,
    Name: source?.name,
    Size: source?.size,
    Type: adaptApiDocumentTypesAltEnum(source?.type),
  };
}
