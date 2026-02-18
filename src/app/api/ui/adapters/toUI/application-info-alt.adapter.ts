import { ApiApplicationInfoAltDto } from '../../../swagger/models/api-application-info';
import { ApplicationInfoAlt } from '../../models/application-info-alt.interface';
import { adaptApplicationStateEnum2ToUI } from './application-state-enum-2.adapter';
import { adaptLotStateEnumToUI } from './lot-state-enum.adapter';

export function adaptApplicationInfoAltToUI(source?: ApiApplicationInfoAltDto | null): ApplicationInfoAlt {
  return {
    applicationSource: source?.ApplicationSource ?? '',
    currentTenantHost: source?.CurrentTenantHost ?? '',
    incomingNumber: source?.IncomingNumber ?? 0,
    publishDate: source?.PublishDate ?? '',
    revokeDate: source?.RevokeDate ?? '',
    state: adaptApplicationStateEnum2ToUI(source?.State),
    stateName: source?.StateName ?? '',
    tenantHost: source?.TenantHost ?? '',
    tradeLotNumber: source?.TradeLotNumber ?? 0,
    tradeLotState: adaptLotStateEnumToUI(source?.TradeLotState),
    tradeName: source?.TradeName ?? '',
    tradeNumber: source?.TradeNumber ?? 0,
    tradeStateName: source?.TradeStateName ?? '',
  };
}
