import { ApiSuspensionInfoAltDto } from '../../../swagger/models/api-suspension-info';
import { SuspensionInfoAlt } from '../../models/suspension-info-alt.interface';

export function adaptSuspensionInfoAltToUI(source?: ApiSuspensionInfoAltDto | null): SuspensionInfoAlt {
  return {
    isContractSigningSuspended: source?.IsContractSigningSuspended ?? false,
    isSuspended: source?.IsSuspended ?? false,
    tradeId: source?.TradeId ?? 0,
  };
}
