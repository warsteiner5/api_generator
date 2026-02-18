import { ApiClarificationParticipantDto } from '../../../swagger/models/api-clarification-participant-dto';
import { ClarificationParticipant } from '../../models/clarification-participant.interface';

export function adaptClarificationParticipantToUI(source?: ApiClarificationParticipantDto | null): ClarificationParticipant {
  return {
    organizationName: source?.OrganizationName ?? '',
    participantGuid: source?.ParticipantGuid ?? '',
  };
}
