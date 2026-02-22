import { ParticipantOfferImportTaskGridItemAlt } from '../../models/participant-offer-import-task-grid-item-alt.interface';
import { ApiParticipantOfferImportTaskGridItemAltDto } from '../../../swagger/models/api-participant-offer-import-task-grid-item';
import { apiParticipantOfferStateEnumAdapter } from '../enums/api-participant-offer-state-enum.adapter';
import { apiPriceListImportTypeEnumAdapter } from '../enums/api-price-list-import-type-enum.adapter';
import { apiTaskStatusEnumAdapter } from '../enums/api-task-status-enum.adapter';

export const apiParticipantOfferImportTaskGridItemAltDtoAdapter = (source?: ParticipantOfferImportTaskGridItemAlt | null): ApiParticipantOfferImportTaskGridItemAltDto => {
  return {
    CreateDate: source?.createDate,
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    FileSize: source?.fileSize,
    FinishDate: source?.finishDate,
    Id: source?.id,
    ImportType: source?.importType === null ? undefined : apiPriceListImportTypeEnumAdapter(source?.importType),
    IsOnModeration: source?.isOnModeration,
    OffersCount: source?.offersCount,
    PriceListState: source?.priceListState === null ? undefined : apiParticipantOfferStateEnumAdapter(source?.priceListState),
    StartDate: source?.startDate,
    TaskStatus: source?.taskStatus === null ? undefined : apiTaskStatusEnumAdapter(source?.taskStatus),
  };
}
