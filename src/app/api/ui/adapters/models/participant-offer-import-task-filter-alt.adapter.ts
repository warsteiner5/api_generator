import { ApiParticipantOfferImportTaskFilterAltDto } from '../../../swagger/models/api-participant-offer-import-task-filter';
import { ParticipantOfferImportTaskFilterAlt } from '../../models/participant-offer-import-task-filter-alt.interface';

export const participantOfferImportTaskFilterAltAdapter = (source?: ApiParticipantOfferImportTaskFilterAltDto | null): ParticipantOfferImportTaskFilterAlt => {
  return (source ?? {}) as ParticipantOfferImportTaskFilterAlt;
}
