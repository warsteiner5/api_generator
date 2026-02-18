import { ParticipantOfferStateEnum } from '../enums/participant-offer-state.enum';
import { PriceListImportTypeEnum } from '../enums/price-list-import-type.enum';
import { TaskStatusEnum } from '../enums/task-status.enum';

export interface ParticipantOfferImportTaskGridItemAlt {
  createDate: string;
  fileGuid: string;
  fileName: string;
  fileSize: number;
  finishDate: string;
  id: number;
  importType: PriceListImportTypeEnum;
  isOnModeration: boolean;
  offersCount: number;
  priceListState: ParticipantOfferStateEnum;
  startDate: string;
  taskStatus: TaskStatusEnum;
}
