import { ApiClarificationRequestCreateDto } from '../../../swagger/models/api-clarification-request-create-dto';
import { ClarificationRequestCreate } from '../../models/clarification-request-create.interface';
import { adaptDocumentDto2ToUI } from './document-dto-2.adapter';

export function adaptClarificationRequestCreateToUI(source?: ApiClarificationRequestCreateDto | null): ClarificationRequestCreate {
  return {
    documents: (source?.Documents ?? []).map((item) => adaptDocumentDto2ToUI(item)),
    expireResponseDate: source?.ExpireResponseDate ?? '',
    participantGuid: source?.ParticipantGuid ?? '',
    requestText: source?.RequestText ?? '',
  };
}
