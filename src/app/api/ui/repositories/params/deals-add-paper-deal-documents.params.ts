import { AddPaperDealDocumentRequestAlt } from '../../models/add-paper-deal-document-request-alt.interface';
import { DealsAddPaperDealDocuments$Params } from '../../../swagger/fn/deals/deals-add-paper-deal-documents';
import { apiAddPaperDealDocumentRequestAltDtoAdapter } from '../../adapters/models/api-add-paper-deal-document-request.adapter';

// @ts-ignore
export interface DealsAddPaperDealDocumentsParams {
  id: number;
  body?: AddPaperDealDocumentRequestAlt;
}

export function dealsAddPaperDealDocumentsAdapter(params?: DealsAddPaperDealDocumentsParams): DealsAddPaperDealDocuments$Params {
  if (!params) {
    return {} as DealsAddPaperDealDocuments$Params;
  }
  return {
      id: params.id,
      body: apiAddPaperDealDocumentRequestAltDtoAdapter(params.body),
  };
}
