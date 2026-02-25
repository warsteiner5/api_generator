import { ParticipantOfferImportTaskFilterAlt } from '../../models/participant-offer-import-task-filter-alt.interface';
import { ApiParticipantOfferImportTaskFilterAltDto } from '../../../swagger/models/api-participant-offer-import-task-filter';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';

export const apiParticipantOfferImportTaskFilterAltDtoAdapter = (source?: ParticipantOfferImportTaskFilterAlt | null): ApiParticipantOfferImportTaskFilterAltDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    PriceListId: source?.priceListId,
    FileName: source?.fileName,
    CreateDateFrom: source?.createDateFrom,
    CreateDateTo: source?.createDateTo,
  };
}
