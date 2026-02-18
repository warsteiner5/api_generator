import { ApplicationInfoAlt } from '../../models/application-info-alt.interface';
import { ApiApplicationInfoAltDto } from '../../../swagger/models/api-application-info';
import { adaptApiApplicationStateEnum2 } from './api-application-state-enum-2.adapter';
import { adaptApiLotStateEnum } from './api-lot-state-enum.adapter';

export function adaptApiApplicationInfoAltDto(source?: ApplicationInfoAlt | null): ApiApplicationInfoAltDto {
  return {
    ApplicationSource: source?.applicationSource,
    CurrentTenantHost: source?.currentTenantHost,
    IncomingNumber: source?.incomingNumber,
    PublishDate: source?.publishDate,
    RevokeDate: source?.revokeDate,
    State: adaptApiApplicationStateEnum2(source?.state),
    StateName: source?.stateName,
    TenantHost: source?.tenantHost,
    TradeLotNumber: source?.tradeLotNumber,
    TradeLotState: adaptApiLotStateEnum(source?.tradeLotState),
    TradeName: source?.tradeName,
    TradeNumber: source?.tradeNumber,
    TradeStateName: source?.tradeStateName,
  };
}
