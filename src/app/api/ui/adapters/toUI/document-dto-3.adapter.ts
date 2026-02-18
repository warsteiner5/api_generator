import { ApiDocumentDto3 } from '../../../swagger/models/api-document-dto-3';
import { DocumentDto3 } from '../../models/document-dto-3.interface';

export function adaptDocumentDto3ToUI(source?: ApiDocumentDto3 | null): DocumentDto3 {
  return (source ?? {}) as DocumentDto3;
}
