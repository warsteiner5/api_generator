/* tslint:disable */
/* eslint-disable */
import { ApiApplicationConsiderationAltDto } from '../models/api-application-consideration';
import { ApiFileDocumentAltDto } from '../models/api-file-document';
export interface ApiExtendTradeDto {
  ApplicationConsiderations?: Array<ApiApplicationConsiderationAltDto> | null;
  ApplicationEndDate?: string;
  FileDocuments?: Array<ApiFileDocumentAltDto> | null;
  PlanningConclusionDate?: string;
  TradeId?: number;
}
