import { ParticipantOfferImportTask } from '../../models/participant-offer-import-task.interface';
import { ApiParticipantOfferImportTaskDto } from '../../../swagger/models/api-participant-offer-import-task-dto';
import { apiParticipantOfferImportErrorStatisticDtoAdapter } from './api-participant-offer-import-error-statistic-dto.adapter';
import { apiParticipantOfferStateEnumAdapter } from '../enums/api-participant-offer-state-enum.adapter';
import { apiPriceListImportTypeEnumAdapter } from '../enums/api-price-list-import-type-enum.adapter';
import { apiTaskStatusEnumAdapter } from '../enums/api-task-status-enum.adapter';

export const apiParticipantOfferImportTaskDtoAdapter = (source?: ParticipantOfferImportTask | null): ApiParticipantOfferImportTaskDto => {
  return {
    CreateDate: source?.createDate,
    ErrorMessage: source?.errorMessage,
    ErrorReportFileGuid: source?.errorReportFileGuid,
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    FileSize: source?.fileSize,
    FinishDate: source?.finishDate,
    Id: source?.id,
    ImportType: source?.importType === null ? undefined : apiPriceListImportTypeEnumAdapter(source?.importType),
    IsOnModeration: source?.isOnModeration,
    OffersCount: source?.offersCount,
    ParticipantOfferImportErrorStatistics: source?.participantOfferImportErrorStatistics?.map((item) => apiParticipantOfferImportErrorStatisticDtoAdapter(item)),
    PriceListId: source?.priceListId,
    PriceListState: source?.priceListState === null ? undefined : apiParticipantOfferStateEnumAdapter(source?.priceListState),
    StartDate: source?.startDate,
    TaskStatus: source?.taskStatus === null ? undefined : apiTaskStatusEnumAdapter(source?.taskStatus),
  };
}
