import { ApiClarificationRequestListItemDto } from '../../../swagger/models/api-clarification-request-list-item-dto';
import { ClarificationRequestListItem } from '../../models/clarification-request-list-item.interface';
import { applicationClarificationRequestResponseAdapter } from './application-clarification-request-response.adapter';
import { commonClarificationRequestStateEnumAdapter } from '../enums/common-clarification-request-state-enum.adapter';
import { documentDto2Adapter } from './document-dto-2.adapter';

export const clarificationRequestListItemAdapter = (source?: ApiClarificationRequestListItemDto | null): ClarificationRequestListItem => {
  return {
    createDate: source?.CreateDate,
    documents: source?.Documents?.map((item) => documentDto2Adapter(item)),
    expireResponseDate: source?.ExpireResponseDate,
    externalId: source?.ExternalId,
    id: source?.Id,
    participantGuid: source?.ParticipantGuid,
    participantName: source?.ParticipantName,
    requestText: source?.RequestText,
    response: source?.Response === null ? undefined : applicationClarificationRequestResponseAdapter(source?.Response),
    responseAllowed: source?.ResponseAllowed,
    responseDate: source?.ResponseDate,
    state: source?.State === null ? undefined : commonClarificationRequestStateEnumAdapter(source?.State),
    tradeId: source?.TradeId,
  };
}
