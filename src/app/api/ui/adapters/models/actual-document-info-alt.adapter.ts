import { ApiActualDocumentInfoAltDto } from '../../../swagger/models/api-actual-document-info';
import { ActualDocumentInfoAlt } from '../../models/actual-document-info-alt.interface';
import { dealDocumentAdapter } from './deal-document.adapter';

export const actualDocumentInfoAltAdapter = (source?: ApiActualDocumentInfoAltDto | null): ActualDocumentInfoAlt => {
  return {
    description: source?.Description,
    documentType: source?.DocumentType,
    documents: source?.Documents?.map((item) => dealDocumentAdapter(item)),
  };
}
