import { ApiGetActualDocumentInfoRequestAltDto } from '../../../swagger/models/api-get-actual-document-info-request';
import { GetActualDocumentInfoRequestAlt } from '../../models/get-actual-document-info-request-alt.interface';

export function adaptGetActualDocumentInfoRequestAltToUI(source?: ApiGetActualDocumentInfoRequestAltDto | null): GetActualDocumentInfoRequestAlt {
  return {
    documentType: source?.DocumentType ?? 0,
    id: source?.Id ?? 0,
  };
}
