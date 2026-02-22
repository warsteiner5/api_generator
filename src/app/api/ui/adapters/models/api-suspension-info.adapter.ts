import { SuspensionInfoAlt } from '../../models/suspension-info-alt.interface';
import { ApiSuspensionInfoAltDto } from '../../../swagger/models/api-suspension-info';

export const apiSuspensionInfoAltDtoAdapter = (source?: SuspensionInfoAlt | null): ApiSuspensionInfoAltDto => {
  return {
    IsContractSigningSuspended: source?.isContractSigningSuspended,
    IsSuspended: source?.isSuspended,
    TradeId: source?.tradeId,
  };
}
