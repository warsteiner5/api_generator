import { ApiParticipantFilterObjectAltDto } from '../../../swagger/models/api-participant-filter-object';
import { ParticipantFilterObjectAlt } from '../../models/participant-filter-object-alt.interface';

export const participantFilterObjectAltAdapter = (source?: ApiParticipantFilterObjectAltDto | null): ParticipantFilterObjectAlt => {
  return (source ?? {}) as ParticipantFilterObjectAlt;
}
