import { ApiDifferenceDealProtocolAltDto } from '../../../swagger/models/api-difference-deal-protocol';
import { DifferenceDealProtocolAlt } from '../../models/difference-deal-protocol-alt.interface';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';

export const differenceDealProtocolAltAdapter = (source?: ApiDifferenceDealProtocolAltDto | null): DifferenceDealProtocolAlt => {
  return {
    chatId: source?.ChatId,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    documentGuids: source?.DocumentGuids,
    id: source?.Id,
    reason: source?.Reason,
  };
}
