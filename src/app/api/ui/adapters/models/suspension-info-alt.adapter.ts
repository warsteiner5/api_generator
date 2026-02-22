import { ApiSuspensionInfoAltDto } from '../../../swagger/models/api-suspension-info';
import { SuspensionInfoAlt } from '../../models/suspension-info-alt.interface';

export const suspensionInfoAltAdapter = (source?: ApiSuspensionInfoAltDto | null): SuspensionInfoAlt => {
  return {
    isContractSigningSuspended: source?.IsContractSigningSuspended,
    isSuspended: source?.IsSuspended,
    tradeId: source?.TradeId,
  };
}
