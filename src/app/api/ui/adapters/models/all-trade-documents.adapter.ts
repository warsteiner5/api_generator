import { ApiAllTradeDocumentsDto } from '../../../swagger/models/api-all-trade-documents-dto';
import { AllTradeDocuments } from '../../models/all-trade-documents.interface';
import { dealDocumentPackAdapter } from './deal-document-pack.adapter';
import { discussionFileAdapter } from './discussion-file.adapter';
import { documentAltAdapter } from './document-alt.adapter';

export const allTradeDocumentsAdapter = (source?: ApiAllTradeDocumentsDto | null): AllTradeDocuments => {
  return {
    dealDocumentPacks: source?.DealDocumentPacks?.map((item) => dealDocumentPackAdapter(item)),
    discussionDocuments: source?.DiscussionDocuments?.map((item) => discussionFileAdapter(item)),
    tradeDocuments: source?.TradeDocuments?.map((item) => documentAltAdapter(item)),
  };
}
