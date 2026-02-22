import { ClarificationParticipant } from '../../models/clarification-participant.interface';
import { ApiClarificationParticipantDto } from '../../../swagger/models/api-clarification-participant-dto';

export const apiClarificationParticipantDtoAdapter = (source?: ClarificationParticipant | null): ApiClarificationParticipantDto => {
  return {
    OrganizationName: source?.organizationName,
    ParticipantGuid: source?.participantGuid,
  };
}
