import { ApiParticipantOfferImportTaskGridItemAltDto } from '../../../swagger/models/api-participant-offer-import-task-grid-item';
import { ParticipantOfferImportTaskGridItemAlt } from '../../models/participant-offer-import-task-grid-item-alt.interface';
import { participantOfferStateEnumAdapter } from '../enums/participant-offer-state-enum.adapter';
import { priceListImportTypeEnumAdapter } from '../enums/price-list-import-type-enum.adapter';
import { taskStatusEnumAdapter } from '../enums/task-status-enum.adapter';

export const participantOfferImportTaskGridItemAltAdapter = (source?: ApiParticipantOfferImportTaskGridItemAltDto | null): ParticipantOfferImportTaskGridItemAlt => {
  return {
    createDate: source?.CreateDate,
    fileGuid: source?.FileGuid,
    fileName: source?.FileName,
    fileSize: source?.FileSize,
    finishDate: source?.FinishDate,
    id: source?.Id,
    importType: source?.ImportType === null ? undefined : priceListImportTypeEnumAdapter(source?.ImportType),
    isOnModeration: source?.IsOnModeration,
    offersCount: source?.OffersCount,
    priceListState: source?.PriceListState === null ? undefined : participantOfferStateEnumAdapter(source?.PriceListState),
    startDate: source?.StartDate,
    taskStatus: source?.TaskStatus === null ? undefined : taskStatusEnumAdapter(source?.TaskStatus),
  };
}
