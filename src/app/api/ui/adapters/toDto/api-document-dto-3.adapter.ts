import { DocumentDto3 } from '../../models/document-dto-3.interface';
import { ApiDocumentDto3 } from '../../../swagger/models/api-document-dto-3';

export function adaptApiDocumentDto3(source?: DocumentDto3 | null): ApiDocumentDto3 {
  return (source ?? {}) as ApiDocumentDto3;
}
