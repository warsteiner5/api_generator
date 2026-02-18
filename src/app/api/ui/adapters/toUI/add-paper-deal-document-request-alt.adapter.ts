import { ApiAddPaperDealDocumentRequestAltDto } from '../../../swagger/models/api-add-paper-deal-document-request';
import { AddPaperDealDocumentRequestAlt } from '../../models/add-paper-deal-document-request-alt.interface';

export function adaptAddPaperDealDocumentRequestAltToUI(source?: ApiAddPaperDealDocumentRequestAltDto | null): AddPaperDealDocumentRequestAlt {
  return {
    fileGuids: source?.FileGuids ?? [],
  };
}
