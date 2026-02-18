import { ApiClarificationRequestListItemDto } from '../../../swagger/models/api-clarification-request-list-item-dto';
import { ClarificationRequestListItem } from '../../models/clarification-request-list-item.interface';
import { adaptApplicationClarificationRequestResponseToUI } from './application-clarification-request-response.adapter';
import { adaptCommonClarificationRequestStateEnumToUI } from './common-clarification-request-state-enum.adapter';
import { adaptDocumentDto2ToUI } from './document-dto-2.adapter';

export function adaptClarificationRequestListItemToUI(source?: ApiClarificationRequestListItemDto | null): ClarificationRequestListItem {
  return {
    createDate: source?.CreateDate ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptDocumentDto2ToUI(item)),
    expireResponseDate: source?.ExpireResponseDate ?? '',
    externalId: source?.ExternalId ?? '',
    id: source?.Id ?? 0,
    participantGuid: source?.ParticipantGuid ?? '',
    participantName: source?.ParticipantName ?? '',
    requestText: source?.RequestText ?? '',
    response: adaptApplicationClarificationRequestResponseToUI(source?.Response),
    responseAllowed: source?.ResponseAllowed ?? false,
    responseDate: source?.ResponseDate ?? '',
    state: adaptCommonClarificationRequestStateEnumToUI(source?.State),
    tradeId: source?.TradeId ?? 0,
  };
}
