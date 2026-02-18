import { ClarificationRequests } from '../../models/clarification-requests.interface';
import { ApiClarificationRequestsDto } from '../../../swagger/models/api-clarification-requests-dto';
import { adaptApiClarificationRequestListItemDto } from './api-clarification-request-list-item-dto.adapter';
import { adaptApiClarificationRequestSideEnum } from './api-clarification-request-side-enum.adapter';

export function adaptApiClarificationRequestsDto(source?: ClarificationRequests | null): ApiClarificationRequestsDto {
  return {
    Requests: (source?.requests ?? []).map((item) => adaptApiClarificationRequestListItemDto(item)),
    Side: adaptApiClarificationRequestSideEnum(source?.side),
  };
}
