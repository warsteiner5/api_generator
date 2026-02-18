/* tslint:disable */
/* eslint-disable */
import { ApiParticipantOfferStateEnum } from '../models/api-participant-offer-state-enum';
import { ApiPriceListImportTypeEnum } from '../models/api-price-list-import-type-enum';
import { ApiTaskStatusEnum } from '../models/api-task-status-enum';
export interface ApiParticipantOfferImportTaskGridItemAltDto {
  CreateDate?: string;
  FileGuid?: string;
  FileName?: string | null;
  FileSize?: number | null;
  FinishDate?: string | null;
  Id?: number;
  ImportType?: ApiPriceListImportTypeEnum;
  IsOnModeration?: boolean;
  OffersCount?: number | null;
  PriceListState?: ApiParticipantOfferStateEnum;
  StartDate?: string | null;
  TaskStatus?: ApiTaskStatusEnum;
}
