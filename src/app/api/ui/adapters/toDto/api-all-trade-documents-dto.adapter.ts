import { AllTradeDocuments } from '../../models/all-trade-documents.interface';
import { ApiAllTradeDocumentsDto } from '../../../swagger/models/api-all-trade-documents-dto';
import { adaptApiDealDocumentPackDto } from './api-deal-document-pack-dto.adapter';
import { adaptApiDiscussionFileDto } from './api-discussion-file-dto.adapter';
import { adaptApiDocumentAltDto } from './api-document.adapter';

export function adaptApiAllTradeDocumentsDto(source?: AllTradeDocuments | null): ApiAllTradeDocumentsDto {
  return {
    DealDocumentPacks: (source?.dealDocumentPacks ?? []).map((item) => adaptApiDealDocumentPackDto(item)),
    DiscussionDocuments: (source?.discussionDocuments ?? []).map((item) => adaptApiDiscussionFileDto(item)),
    TradeDocuments: (source?.tradeDocuments ?? []).map((item) => adaptApiDocumentAltDto(item)),
  };
}
