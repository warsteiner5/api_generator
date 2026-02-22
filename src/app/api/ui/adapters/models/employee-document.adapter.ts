import { ApiEmployeeDocumentDto } from '../../../swagger/models/api-employee-document-dto';
import { EmployeeDocument } from '../../models/employee-document.interface';
import { documentTypesAltEnumAdapter } from '../enums/document-types-alt-enum.adapter';

export const employeeDocumentAdapter = (source?: ApiEmployeeDocumentDto | null): EmployeeDocument => {
  return {
    fileGuid: source?.FileGuid,
    id: source?.Id,
    name: source?.Name,
    size: source?.Size,
    type: source?.Type === null ? undefined : documentTypesAltEnumAdapter(source?.Type),
  };
}
