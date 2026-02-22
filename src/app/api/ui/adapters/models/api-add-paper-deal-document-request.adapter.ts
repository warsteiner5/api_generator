import { AddPaperDealDocumentRequestAlt } from '../../models/add-paper-deal-document-request-alt.interface';
import { ApiAddPaperDealDocumentRequestAltDto } from '../../../swagger/models/api-add-paper-deal-document-request';

export const apiAddPaperDealDocumentRequestAltDtoAdapter = (source?: AddPaperDealDocumentRequestAlt | null): ApiAddPaperDealDocumentRequestAltDto => {
  return {
    FileGuids: source?.fileGuids,
  };
}
