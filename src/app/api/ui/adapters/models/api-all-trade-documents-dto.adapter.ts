import { AllTradeDocuments } from '../../models/all-trade-documents.interface';
import { ApiAllTradeDocumentsDto } from '../../../swagger/models/api-all-trade-documents-dto';
import { apiDealDocumentPackDtoAdapter } from './api-deal-document-pack-dto.adapter';
import { apiDiscussionFileDtoAdapter } from './api-discussion-file-dto.adapter';
import { apiDocumentAltDtoAdapter } from './api-document.adapter';

export const apiAllTradeDocumentsDtoAdapter = (source?: AllTradeDocuments | null): ApiAllTradeDocumentsDto => {
  return {
    DealDocumentPacks: source?.dealDocumentPacks?.map((item) => apiDealDocumentPackDtoAdapter(item)),
    DiscussionDocuments: source?.discussionDocuments?.map((item) => apiDiscussionFileDtoAdapter(item)),
    TradeDocuments: source?.tradeDocuments?.map((item) => apiDocumentAltDtoAdapter(item)),
  };
}
