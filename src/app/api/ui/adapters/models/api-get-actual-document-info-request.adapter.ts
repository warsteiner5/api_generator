import { GetActualDocumentInfoRequestAlt } from '../../models/get-actual-document-info-request-alt.interface';
import { ApiGetActualDocumentInfoRequestAltDto } from '../../../swagger/models/api-get-actual-document-info-request';

export const apiGetActualDocumentInfoRequestAltDtoAdapter = (source?: GetActualDocumentInfoRequestAlt | null): ApiGetActualDocumentInfoRequestAltDto => {
  return {
    DocumentType: source?.documentType,
    Id: source?.id,
  };
}
