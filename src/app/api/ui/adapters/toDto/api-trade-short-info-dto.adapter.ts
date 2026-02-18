import { TradeShortInfo } from '../../models/trade-short-info.interface';
import { ApiTradeShortInfoDto } from '../../../swagger/models/api-trade-short-info-dto';
import { adaptApiPurchaseMethodTypeEnum } from './api-purchase-method-type-enum.adapter';
import { adaptApiTradeLotDto } from './api-trade-lot-dto.adapter';
import { adaptApiTradeStateEnum } from './api-trade-state-enum.adapter';

export function adaptApiTradeShortInfoDto(source?: TradeShortInfo | null): ApiTradeShortInfoDto {
  return {
    ConditionsOfPayment: source?.conditionsOfPayment,
    ExternalSourcePlatformNumber: source?.externalSourcePlatformNumber,
    FillingApplicationEndDate: source?.fillingApplicationEndDate,
    Id: source?.id,
    Lots: (source?.lots ?? []).map((item) => adaptApiTradeLotDto(item)),
    NotificationNumber: source?.notificationNumber,
    OrganizerId: source?.organizerId,
    PublicationDate: source?.publicationDate,
    PurchaseMethod: adaptApiPurchaseMethodTypeEnum(source?.purchaseMethod),
    TradeDescription: source?.tradeDescription,
    TradeState: adaptApiTradeStateEnum(source?.tradeState),
  };
}
