import { ApplicationInfoAlt } from '../../models/application-info-alt.interface';
import { ApiApplicationInfoAltDto } from '../../../swagger/models/api-application-info';
import { apiApplicationStateEnum2Adapter } from '../enums/api-application-state-enum-2.adapter';
import { apiLotStateEnumAdapter } from '../enums/api-lot-state-enum.adapter';

export const apiApplicationInfoAltDtoAdapter = (source?: ApplicationInfoAlt | null): ApiApplicationInfoAltDto => {
  return {
    ApplicationSource: source?.applicationSource,
    CurrentTenantHost: source?.currentTenantHost,
    IncomingNumber: source?.incomingNumber,
    PublishDate: source?.publishDate,
    RevokeDate: source?.revokeDate,
    State: source?.state === null ? undefined : apiApplicationStateEnum2Adapter(source?.state),
    StateName: source?.stateName,
    TenantHost: source?.tenantHost,
    TradeLotNumber: source?.tradeLotNumber,
    TradeLotState: source?.tradeLotState === null ? undefined : apiLotStateEnumAdapter(source?.tradeLotState),
    TradeName: source?.tradeName,
    TradeNumber: source?.tradeNumber,
    TradeStateName: source?.tradeStateName,
  };
}
