import { ClarificationRequestCreate } from '../../models/clarification-request-create.interface';
import { ApiClarificationRequestCreateDto } from '../../../swagger/models/api-clarification-request-create-dto';
import { adaptApiDocumentDto2 } from './api-document-dto-2.adapter';

export function adaptApiClarificationRequestCreateDto(source?: ClarificationRequestCreate | null): ApiClarificationRequestCreateDto {
  return {
    Documents: (source?.documents ?? []).map((item) => adaptApiDocumentDto2(item)),
    ExpireResponseDate: source?.expireResponseDate,
    ParticipantGuid: source?.participantGuid,
    RequestText: source?.requestText,
  };
}
