import { ApiParticipantOfferImportTaskDto } from '../../../swagger/models/api-participant-offer-import-task-dto';
import { ParticipantOfferImportTask } from '../../models/participant-offer-import-task.interface';
import { adaptParticipantOfferImportErrorStatisticToUI } from './participant-offer-import-error-statistic.adapter';
import { adaptParticipantOfferStateEnumToUI } from './participant-offer-state-enum.adapter';
import { adaptPriceListImportTypeEnumToUI } from './price-list-import-type-enum.adapter';
import { adaptTaskStatusEnumToUI } from './task-status-enum.adapter';

export function adaptParticipantOfferImportTaskToUI(source?: ApiParticipantOfferImportTaskDto | null): ParticipantOfferImportTask {
  return {
    createDate: source?.CreateDate ?? '',
    errorMessage: source?.ErrorMessage ?? '',
    errorReportFileGuid: source?.ErrorReportFileGuid ?? '',
    fileGuid: source?.FileGuid ?? '',
    fileName: source?.FileName ?? '',
    fileSize: source?.FileSize ?? 0,
    finishDate: source?.FinishDate ?? '',
    id: source?.Id ?? 0,
    importType: adaptPriceListImportTypeEnumToUI(source?.ImportType),
    isOnModeration: source?.IsOnModeration ?? false,
    offersCount: source?.OffersCount ?? 0,
    participantOfferImportErrorStatistics: (source?.ParticipantOfferImportErrorStatistics ?? []).map((item) => adaptParticipantOfferImportErrorStatisticToUI(item)),
    priceListId: source?.PriceListId ?? 0,
    priceListState: adaptParticipantOfferStateEnumToUI(source?.PriceListState),
    startDate: source?.StartDate ?? '',
    taskStatus: adaptTaskStatusEnumToUI(source?.TaskStatus),
  };
}
