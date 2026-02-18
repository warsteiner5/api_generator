import { ApiEmployeeDocumentDto } from '../../../swagger/models/api-employee-document-dto';
import { EmployeeDocument } from '../../models/employee-document.interface';
import { adaptDocumentTypesAltEnumToUI } from './document-types-alt-enum.adapter';

export function adaptEmployeeDocumentToUI(source?: ApiEmployeeDocumentDto | null): EmployeeDocument {
  return {
    fileGuid: source?.FileGuid ?? '',
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    size: source?.Size ?? 0,
    type: adaptDocumentTypesAltEnumToUI(source?.Type),
  };
}
