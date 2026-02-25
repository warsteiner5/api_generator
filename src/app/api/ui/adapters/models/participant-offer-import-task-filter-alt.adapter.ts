import { ApiParticipantOfferImportTaskFilterAltDto } from '../../../swagger/models/api-participant-offer-import-task-filter';
import { ParticipantOfferImportTaskFilterAlt } from '../../models/participant-offer-import-task-filter-alt.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';

export const participantOfferImportTaskFilterAltAdapter = (source?: ApiParticipantOfferImportTaskFilterAltDto | null): ParticipantOfferImportTaskFilterAlt => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    priceListId: source?.PriceListId,
    fileName: source?.FileName,
    createDateFrom: source?.CreateDateFrom,
    createDateTo: source?.CreateDateTo,
  };
}
