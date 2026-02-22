import { ApiParticipantOfferImportTaskDto } from '../../../swagger/models/api-participant-offer-import-task-dto';
import { ParticipantOfferImportTask } from '../../models/participant-offer-import-task.interface';
import { participantOfferImportErrorStatisticAdapter } from './participant-offer-import-error-statistic.adapter';
import { participantOfferStateEnumAdapter } from '../enums/participant-offer-state-enum.adapter';
import { priceListImportTypeEnumAdapter } from '../enums/price-list-import-type-enum.adapter';
import { taskStatusEnumAdapter } from '../enums/task-status-enum.adapter';

export const participantOfferImportTaskAdapter = (source?: ApiParticipantOfferImportTaskDto | null): ParticipantOfferImportTask => {
  return {
    createDate: source?.CreateDate,
    errorMessage: source?.ErrorMessage,
    errorReportFileGuid: source?.ErrorReportFileGuid,
    fileGuid: source?.FileGuid,
    fileName: source?.FileName,
    fileSize: source?.FileSize,
    finishDate: source?.FinishDate,
    id: source?.Id,
    importType: source?.ImportType === null ? undefined : priceListImportTypeEnumAdapter(source?.ImportType),
    isOnModeration: source?.IsOnModeration,
    offersCount: source?.OffersCount,
    participantOfferImportErrorStatistics: source?.ParticipantOfferImportErrorStatistics?.map((item) => participantOfferImportErrorStatisticAdapter(item)),
    priceListId: source?.PriceListId,
    priceListState: source?.PriceListState === null ? undefined : participantOfferStateEnumAdapter(source?.PriceListState),
    startDate: source?.StartDate,
    taskStatus: source?.TaskStatus === null ? undefined : taskStatusEnumAdapter(source?.TaskStatus),
  };
}
