import { ClarificationRequestCreate } from '../../models/clarification-request-create.interface';
import { ApiClarificationRequestCreateDto } from '../../../swagger/models/api-clarification-request-create-dto';
import { apiDocumentDto2Adapter } from './api-document-dto-2.adapter';

export const apiClarificationRequestCreateDtoAdapter = (source?: ClarificationRequestCreate | null): ApiClarificationRequestCreateDto => {
  return {
    Documents: source?.documents?.map((item) => apiDocumentDto2Adapter(item)),
    ExpireResponseDate: source?.expireResponseDate,
    ParticipantGuid: source?.participantGuid,
    RequestText: source?.requestText,
  };
}
