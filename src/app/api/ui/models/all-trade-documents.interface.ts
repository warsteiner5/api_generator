import { DealDocumentPack } from './deal-document-pack.interface';
import { DiscussionFile } from './discussion-file.interface';
import { DocumentAlt } from './document-alt.interface';

export interface AllTradeDocuments {
  dealDocumentPacks: DealDocumentPack[];
  discussionDocuments: DiscussionFile[];
  tradeDocuments: DocumentAlt[];
}
