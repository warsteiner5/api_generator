import { ParticipantOfferImportTask } from '../../models/participant-offer-import-task.interface';
import { ApiParticipantOfferImportTaskDto } from '../../../swagger/models/api-participant-offer-import-task-dto';
import { adaptApiParticipantOfferImportErrorStatisticDto } from './api-participant-offer-import-error-statistic-dto.adapter';
import { adaptApiParticipantOfferStateEnum } from './api-participant-offer-state-enum.adapter';
import { adaptApiPriceListImportTypeEnum } from './api-price-list-import-type-enum.adapter';
import { adaptApiTaskStatusEnum } from './api-task-status-enum.adapter';

export function adaptApiParticipantOfferImportTaskDto(source?: ParticipantOfferImportTask | null): ApiParticipantOfferImportTaskDto {
  return {
    CreateDate: source?.createDate,
    ErrorMessage: source?.errorMessage,
    ErrorReportFileGuid: source?.errorReportFileGuid,
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    FileSize: source?.fileSize,
    FinishDate: source?.finishDate,
    Id: source?.id,
    ImportType: adaptApiPriceListImportTypeEnum(source?.importType),
    IsOnModeration: source?.isOnModeration,
    OffersCount: source?.offersCount,
    ParticipantOfferImportErrorStatistics: (source?.participantOfferImportErrorStatistics ?? []).map((item) => adaptApiParticipantOfferImportErrorStatisticDto(item)),
    PriceListId: source?.priceListId,
    PriceListState: adaptApiParticipantOfferStateEnum(source?.priceListState),
    StartDate: source?.startDate,
    TaskStatus: adaptApiTaskStatusEnum(source?.taskStatus),
  };
}
