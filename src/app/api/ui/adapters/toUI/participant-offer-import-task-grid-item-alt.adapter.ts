import { ApiParticipantOfferImportTaskGridItemAltDto } from '../../../swagger/models/api-participant-offer-import-task-grid-item';
import { ParticipantOfferImportTaskGridItemAlt } from '../../models/participant-offer-import-task-grid-item-alt.interface';
import { adaptParticipantOfferStateEnumToUI } from './participant-offer-state-enum.adapter';
import { adaptPriceListImportTypeEnumToUI } from './price-list-import-type-enum.adapter';
import { adaptTaskStatusEnumToUI } from './task-status-enum.adapter';

export function adaptParticipantOfferImportTaskGridItemAltToUI(source?: ApiParticipantOfferImportTaskGridItemAltDto | null): ParticipantOfferImportTaskGridItemAlt {
  return {
    createDate: source?.CreateDate ?? '',
    fileGuid: source?.FileGuid ?? '',
    fileName: source?.FileName ?? '',
    fileSize: source?.FileSize ?? 0,
    finishDate: source?.FinishDate ?? '',
    id: source?.Id ?? 0,
    importType: adaptPriceListImportTypeEnumToUI(source?.ImportType),
    isOnModeration: source?.IsOnModeration ?? false,
    offersCount: source?.OffersCount ?? 0,
    priceListState: adaptParticipantOfferStateEnumToUI(source?.PriceListState),
    startDate: source?.StartDate ?? '',
    taskStatus: adaptTaskStatusEnumToUI(source?.TaskStatus),
  };
}
