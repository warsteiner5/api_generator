import { ParticipantOfferImportTaskGridItemAlt } from '../../models/participant-offer-import-task-grid-item-alt.interface';
import { ApiParticipantOfferImportTaskGridItemAltDto } from '../../../swagger/models/api-participant-offer-import-task-grid-item';
import { adaptApiParticipantOfferStateEnum } from './api-participant-offer-state-enum.adapter';
import { adaptApiPriceListImportTypeEnum } from './api-price-list-import-type-enum.adapter';
import { adaptApiTaskStatusEnum } from './api-task-status-enum.adapter';

export function adaptApiParticipantOfferImportTaskGridItemAltDto(source?: ParticipantOfferImportTaskGridItemAlt | null): ApiParticipantOfferImportTaskGridItemAltDto {
  return {
    CreateDate: source?.createDate,
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    FileSize: source?.fileSize,
    FinishDate: source?.finishDate,
    Id: source?.id,
    ImportType: adaptApiPriceListImportTypeEnum(source?.importType),
    IsOnModeration: source?.isOnModeration,
    OffersCount: source?.offersCount,
    PriceListState: adaptApiParticipantOfferStateEnum(source?.priceListState),
    StartDate: source?.startDate,
    TaskStatus: adaptApiTaskStatusEnum(source?.taskStatus),
  };
}
