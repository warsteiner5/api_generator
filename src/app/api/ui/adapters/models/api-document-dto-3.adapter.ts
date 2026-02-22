import { DocumentDto3 } from '../../models/document-dto-3.interface';
import { ApiDocumentDto3 } from '../../../swagger/models/api-document-dto-3';

export const apiDocumentDto3Adapter = (source?: DocumentDto3 | null): ApiDocumentDto3 => {
  return (source ?? {}) as ApiDocumentDto3;
}
