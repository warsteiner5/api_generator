import { ApiClarificationRequestsDto } from '../../../swagger/models/api-clarification-requests-dto';
import { ClarificationRequests } from '../../models/clarification-requests.interface';
import { adaptClarificationRequestListItemToUI } from './clarification-request-list-item.adapter';
import { adaptClarificationRequestSideEnumToUI } from './clarification-request-side-enum.adapter';

export function adaptClarificationRequestsToUI(source?: ApiClarificationRequestsDto | null): ClarificationRequests {
  return {
    requests: (source?.Requests ?? []).map((item) => adaptClarificationRequestListItemToUI(item)),
    side: adaptClarificationRequestSideEnumToUI(source?.Side),
  };
}
