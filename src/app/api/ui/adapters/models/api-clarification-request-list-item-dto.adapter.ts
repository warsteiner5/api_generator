import { ClarificationRequestListItem } from '../../models/clarification-request-list-item.interface';
import { ApiClarificationRequestListItemDto } from '../../../swagger/models/api-clarification-request-list-item-dto';
import { apiApplicationClarificationRequestResponseDtoAdapter } from './api-application-clarification-request-response-dto.adapter';
import { apiCommonClarificationRequestStateEnumAdapter } from '../enums/api-common-clarification-request-state-enum.adapter';
import { apiDocumentDto2Adapter } from './api-document-dto-2.adapter';

export const apiClarificationRequestListItemDtoAdapter = (source?: ClarificationRequestListItem | null): ApiClarificationRequestListItemDto => {
  return {
    CreateDate: source?.createDate,
    Documents: source?.documents?.map((item) => apiDocumentDto2Adapter(item)),
    ExpireResponseDate: source?.expireResponseDate,
    ExternalId: source?.externalId,
    Id: source?.id,
    ParticipantGuid: source?.participantGuid,
    ParticipantName: source?.participantName,
    RequestText: source?.requestText,
    Response: source?.response === null ? undefined : apiApplicationClarificationRequestResponseDtoAdapter(source?.response),
    ResponseAllowed: source?.responseAllowed,
    ResponseDate: source?.responseDate,
    State: source?.state === null ? undefined : apiCommonClarificationRequestStateEnumAdapter(source?.state),
    TradeId: source?.tradeId,
  };
}
