import { ClarificationParticipant } from '../../models/clarification-participant.interface';
import { ApiClarificationParticipantDto } from '../../../swagger/models/api-clarification-participant-dto';

export function adaptApiClarificationParticipantDto(source?: ClarificationParticipant | null): ApiClarificationParticipantDto {
  return {
    OrganizationName: source?.organizationName,
    ParticipantGuid: source?.participantGuid,
  };
}
