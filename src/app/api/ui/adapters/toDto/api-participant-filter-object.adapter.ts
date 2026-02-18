import { ParticipantFilterObjectAlt } from '../../models/participant-filter-object-alt.interface';
import { ApiParticipantFilterObjectAltDto } from '../../../swagger/models/api-participant-filter-object';

export function adaptApiParticipantFilterObjectAltDto(source?: ParticipantFilterObjectAlt | null): ApiParticipantFilterObjectAltDto {
  return (source ?? {}) as ApiParticipantFilterObjectAltDto;
}
