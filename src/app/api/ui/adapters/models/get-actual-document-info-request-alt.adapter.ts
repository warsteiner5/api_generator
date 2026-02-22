import { ApiGetActualDocumentInfoRequestAltDto } from '../../../swagger/models/api-get-actual-document-info-request';
import { GetActualDocumentInfoRequestAlt } from '../../models/get-actual-document-info-request-alt.interface';

export const getActualDocumentInfoRequestAltAdapter = (source?: ApiGetActualDocumentInfoRequestAltDto | null): GetActualDocumentInfoRequestAlt => {
  return {
    documentType: source?.DocumentType,
    id: source?.Id,
  };
}
