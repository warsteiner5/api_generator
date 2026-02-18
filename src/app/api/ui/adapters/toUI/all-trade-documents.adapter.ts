import { ApiAllTradeDocumentsDto } from '../../../swagger/models/api-all-trade-documents-dto';
import { AllTradeDocuments } from '../../models/all-trade-documents.interface';
import { adaptDealDocumentPackToUI } from './deal-document-pack.adapter';
import { adaptDiscussionFileToUI } from './discussion-file.adapter';
import { adaptDocumentAltToUI } from './document-alt.adapter';

export function adaptAllTradeDocumentsToUI(source?: ApiAllTradeDocumentsDto | null): AllTradeDocuments {
  return {
    dealDocumentPacks: (source?.DealDocumentPacks ?? []).map((item) => adaptDealDocumentPackToUI(item)),
    discussionDocuments: (source?.DiscussionDocuments ?? []).map((item) => adaptDiscussionFileToUI(item)),
    tradeDocuments: (source?.TradeDocuments ?? []).map((item) => adaptDocumentAltToUI(item)),
  };
}
