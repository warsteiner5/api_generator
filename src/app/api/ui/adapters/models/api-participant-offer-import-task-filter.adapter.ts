import { ParticipantOfferImportTaskFilterAlt } from '../../models/participant-offer-import-task-filter-alt.interface';
import { ApiParticipantOfferImportTaskFilterAltDto } from '../../../swagger/models/api-participant-offer-import-task-filter';

export const apiParticipantOfferImportTaskFilterAltDtoAdapter = (source?: ParticipantOfferImportTaskFilterAlt | null): ApiParticipantOfferImportTaskFilterAltDto => {
  return (source ?? {}) as ApiParticipantOfferImportTaskFilterAltDto;
}
