import { ApiClarificationRequestCreateDto } from '../../../swagger/models/api-clarification-request-create-dto';
import { ClarificationRequestCreate } from '../../models/clarification-request-create.interface';
import { documentDto2Adapter } from './document-dto-2.adapter';

export const clarificationRequestCreateAdapter = (source?: ApiClarificationRequestCreateDto | null): ClarificationRequestCreate => {
  return {
    documents: source?.Documents?.map((item) => documentDto2Adapter(item)),
    expireResponseDate: source?.ExpireResponseDate,
    participantGuid: source?.ParticipantGuid,
    requestText: source?.RequestText,
  };
}
