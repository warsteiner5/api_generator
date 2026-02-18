/* tslint:disable */
/* eslint-disable */
import { ApiParticipantOfferImportErrorStatisticDto } from '../models/api-participant-offer-import-error-statistic-dto';
import { ApiParticipantOfferStateEnum } from '../models/api-participant-offer-state-enum';
import { ApiPriceListImportTypeEnum } from '../models/api-price-list-import-type-enum';
import { ApiTaskStatusEnum } from '../models/api-task-status-enum';
export interface ApiParticipantOfferImportTaskDto {
  CreateDate?: string;
  ErrorMessage?: string | null;
  ErrorReportFileGuid?: string | null;
  FileGuid?: string;
  FileName?: string | null;
  FileSize?: number | null;
  FinishDate?: string | null;
  Id?: number;
  ImportType?: ApiPriceListImportTypeEnum;
  IsOnModeration?: boolean;
  OffersCount?: number | null;
  ParticipantOfferImportErrorStatistics?: Array<ApiParticipantOfferImportErrorStatisticDto> | null;
  PriceListId?: number | null;
  PriceListState?: ApiParticipantOfferStateEnum;
  StartDate?: string | null;
  TaskStatus?: ApiTaskStatusEnum;
}
