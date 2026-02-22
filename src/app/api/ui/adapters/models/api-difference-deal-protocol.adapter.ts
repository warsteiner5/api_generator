import { DifferenceDealProtocolAlt } from '../../models/difference-deal-protocol-alt.interface';
import { ApiDifferenceDealProtocolAltDto } from '../../../swagger/models/api-difference-deal-protocol';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';

export const apiDifferenceDealProtocolAltDtoAdapter = (source?: DifferenceDealProtocolAlt | null): ApiDifferenceDealProtocolAltDto => {
  return {
    ChatId: source?.chatId,
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
    DocumentGuids: source?.documentGuids,
    Id: source?.id,
    Reason: source?.reason,
  };
}
