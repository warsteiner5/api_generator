import { ApiDifferenceDealProtocolAltDto } from '../../../swagger/models/api-difference-deal-protocol';
import { DifferenceDealProtocolAlt } from '../../models/difference-deal-protocol-alt.interface';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';

export function adaptDifferenceDealProtocolAltToUI(source?: ApiDifferenceDealProtocolAltDto | null): DifferenceDealProtocolAlt {
  return {
    chatId: source?.ChatId ?? 0,
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
    documentGuids: source?.DocumentGuids ?? [],
    id: source?.Id ?? 0,
    reason: source?.Reason ?? '',
  };
}
