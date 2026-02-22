import { ApplicationConsiderationAlt } from './application-consideration-alt.interface';
import { FileDocumentAlt } from './file-document-alt.interface';

// @ts-ignore
export interface ExtendTrade {
  applicationConsiderations: ApplicationConsiderationAlt[];
  applicationEndDate: string;
  fileDocuments: FileDocumentAlt[];
  planningConclusionDate: string;
  tradeId: number;
}
