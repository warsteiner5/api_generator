import { ApiApplicationInfoAltDto } from '../../../swagger/models/api-application-info';
import { ApplicationInfoAlt } from '../../models/application-info-alt.interface';
import { applicationStateEnum2Adapter } from '../enums/application-state-enum-2.adapter';
import { lotStateEnumAdapter } from '../enums/lot-state-enum.adapter';

export const applicationInfoAltAdapter = (source?: ApiApplicationInfoAltDto | null): ApplicationInfoAlt => {
  return {
    applicationSource: source?.ApplicationSource,
    currentTenantHost: source?.CurrentTenantHost,
    incomingNumber: source?.IncomingNumber,
    publishDate: source?.PublishDate,
    revokeDate: source?.RevokeDate,
    state: source?.State === null ? undefined : applicationStateEnum2Adapter(source?.State),
    stateName: source?.StateName,
    tenantHost: source?.TenantHost,
    tradeLotNumber: source?.TradeLotNumber,
    tradeLotState: source?.TradeLotState === null ? undefined : lotStateEnumAdapter(source?.TradeLotState),
    tradeName: source?.TradeName,
    tradeNumber: source?.TradeNumber,
    tradeStateName: source?.TradeStateName,
  };
}
