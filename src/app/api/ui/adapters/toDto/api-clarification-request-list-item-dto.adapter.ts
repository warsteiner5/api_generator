import { ClarificationRequestListItem } from '../../models/clarification-request-list-item.interface';
import { ApiClarificationRequestListItemDto } from '../../../swagger/models/api-clarification-request-list-item-dto';
import { adaptApiApplicationClarificationRequestResponseDto } from './api-application-clarification-request-response-dto.adapter';
import { adaptApiCommonClarificationRequestStateEnum } from './api-common-clarification-request-state-enum.adapter';
import { adaptApiDocumentDto2 } from './api-document-dto-2.adapter';

export function adaptApiClarificationRequestListItemDto(source?: ClarificationRequestListItem | null): ApiClarificationRequestListItemDto {
  return {
    CreateDate: source?.createDate,
    Documents: (source?.documents ?? []).map((item) => adaptApiDocumentDto2(item)),
    ExpireResponseDate: source?.expireResponseDate,
    ExternalId: source?.externalId,
    Id: source?.id,
    ParticipantGuid: source?.participantGuid,
    ParticipantName: source?.participantName,
    RequestText: source?.requestText,
    Response: adaptApiApplicationClarificationRequestResponseDto(source?.response),
    ResponseAllowed: source?.responseAllowed,
    ResponseDate: source?.responseDate,
    State: adaptApiCommonClarificationRequestStateEnum(source?.state),
    TradeId: source?.tradeId,
  };
}
