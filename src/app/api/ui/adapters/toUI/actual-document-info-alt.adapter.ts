import { ApiActualDocumentInfoAltDto } from '../../../swagger/models/api-actual-document-info';
import { ActualDocumentInfoAlt } from '../../models/actual-document-info-alt.interface';
import { adaptDealDocumentToUI } from './deal-document.adapter';

export function adaptActualDocumentInfoAltToUI(source?: ApiActualDocumentInfoAltDto | null): ActualDocumentInfoAlt {
  return {
    description: source?.Description ?? '',
    documentType: source?.DocumentType ?? 0,
    documents: (source?.Documents ?? []).map((item) => adaptDealDocumentToUI(item)),
  };
}
