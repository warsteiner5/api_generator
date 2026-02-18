/* tslint:disable */
/* eslint-disable */
import { ApiDealDocumentDto } from '../models/api-deal-document-dto';
import { ApiDealObjectEnum } from '../models/api-deal-object-enum';
import { ApiDealStateEnum } from '../models/api-deal-state-enum';
export interface ApiChangeDealFormDto {
  CancellationReason?: string | null;
  ConclusionDate?: string | null;
  DealCustomNumber?: string | null;
  DealObject?: ApiDealObjectEnum;
  Documents?: Array<ApiDealDocumentDto> | null;
  ExecutionFrom?: string | null;
  ExecutionTo?: string | null;
  Id?: number;
  Price?: number | null;
  State?: ApiDealStateEnum;
}
