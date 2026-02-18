import { ParticipantOfferImportErrorStatistic } from './participant-offer-import-error-statistic.interface';
import { ParticipantOfferStateEnum } from '../enums/participant-offer-state.enum';
import { PriceListImportTypeEnum } from '../enums/price-list-import-type.enum';
import { TaskStatusEnum } from '../enums/task-status.enum';

export interface ParticipantOfferImportTask {
  createDate: string;
  errorMessage: string;
  errorReportFileGuid: string;
  fileGuid: string;
  fileName: string;
  fileSize: number;
  finishDate: string;
  id: number;
  importType: PriceListImportTypeEnum;
  isOnModeration: boolean;
  offersCount: number;
  participantOfferImportErrorStatistics: ParticipantOfferImportErrorStatistic[];
  priceListId: number;
  priceListState: ParticipantOfferStateEnum;
  startDate: string;
  taskStatus: TaskStatusEnum;
}
