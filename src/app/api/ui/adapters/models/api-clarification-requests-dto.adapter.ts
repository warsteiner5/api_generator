import { ClarificationRequests } from '../../models/clarification-requests.interface';
import { ApiClarificationRequestsDto } from '../../../swagger/models/api-clarification-requests-dto';
import { apiClarificationRequestListItemDtoAdapter } from './api-clarification-request-list-item-dto.adapter';
import { apiClarificationRequestSideEnumAdapter } from '../enums/api-clarification-request-side-enum.adapter';

export const apiClarificationRequestsDtoAdapter = (source?: ClarificationRequests | null): ApiClarificationRequestsDto => {
  return {
    Requests: source?.requests?.map((item) => apiClarificationRequestListItemDtoAdapter(item)),
    Side: source?.side === null ? undefined : apiClarificationRequestSideEnumAdapter(source?.side),
  };
}
