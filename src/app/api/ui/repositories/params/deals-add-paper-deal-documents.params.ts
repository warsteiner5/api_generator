import { AddPaperDealDocumentRequestAlt } from '../../models/add-paper-deal-document-request-alt.interface';
import { DealsAddPaperDealDocuments$Params } from '../../../swagger/fn/deals/deals-add-paper-deal-documents';
import { adaptApiAddPaperDealDocumentRequestAltDto } from '../../adapters/toDto/api-add-paper-deal-document-request.adapter';

export interface DealsAddPaperDealDocumentsParams {
  id: number;
  body?: AddPaperDealDocumentRequestAlt;
}

export const dealsAddPaperDealDocumentsParamsAdapter = {
  adapt(params?: DealsAddPaperDealDocumentsParams): DealsAddPaperDealDocuments$Params {
    if (!params) {
      return {} as DealsAddPaperDealDocuments$Params;
    }
    return {
      id: params.id,
      body: adaptApiAddPaperDealDocumentRequestAltDto(params.body),
    };
  }
};
