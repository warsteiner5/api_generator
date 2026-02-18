/* tslint:disable */
/* eslint-disable */
import { ApiDealDocumentPackDto } from '../models/api-deal-document-pack-dto';
import { ApiDiscussionFileDto } from '../models/api-discussion-file-dto';
import { ApiDocumentAltDto } from '../models/api-document';
export interface ApiAllTradeDocumentsDto {
  DealDocumentPacks?: Array<ApiDealDocumentPackDto> | null;
  DiscussionDocuments?: Array<ApiDiscussionFileDto> | null;
  TradeDocuments?: Array<ApiDocumentAltDto> | null;
}
