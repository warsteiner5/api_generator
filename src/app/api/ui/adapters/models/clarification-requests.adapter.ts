import { ApiClarificationRequestsDto } from '../../../swagger/models/api-clarification-requests-dto';
import { ClarificationRequests } from '../../models/clarification-requests.interface';
import { clarificationRequestListItemAdapter } from './clarification-request-list-item.adapter';
import { clarificationRequestSideEnumAdapter } from '../enums/clarification-request-side-enum.adapter';

export const clarificationRequestsAdapter = (source?: ApiClarificationRequestsDto | null): ClarificationRequests => {
  return {
    requests: source?.Requests?.map((item) => clarificationRequestListItemAdapter(item)),
    side: source?.Side === null ? undefined : clarificationRequestSideEnumAdapter(source?.Side),
  };
}
