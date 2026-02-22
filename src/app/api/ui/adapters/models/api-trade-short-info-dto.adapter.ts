import { TradeShortInfo } from '../../models/trade-short-info.interface';
import { ApiTradeShortInfoDto } from '../../../swagger/models/api-trade-short-info-dto';
import { apiPurchaseMethodTypeEnumAdapter } from '../enums/api-purchase-method-type-enum.adapter';
import { apiTradeLotDtoAdapter } from './api-trade-lot-dto.adapter';
import { apiTradeStateEnumAdapter } from '../enums/api-trade-state-enum.adapter';

export const apiTradeShortInfoDtoAdapter = (source?: TradeShortInfo | null): ApiTradeShortInfoDto => {
  return {
    ConditionsOfPayment: source?.conditionsOfPayment,
    ExternalSourcePlatformNumber: source?.externalSourcePlatformNumber,
    FillingApplicationEndDate: source?.fillingApplicationEndDate,
    Id: source?.id,
    Lots: source?.lots?.map((item) => apiTradeLotDtoAdapter(item)),
    NotificationNumber: source?.notificationNumber,
    OrganizerId: source?.organizerId,
    PublicationDate: source?.publicationDate,
    PurchaseMethod: source?.purchaseMethod === null ? undefined : apiPurchaseMethodTypeEnumAdapter(source?.purchaseMethod),
    TradeDescription: source?.tradeDescription,
    TradeState: source?.tradeState === null ? undefined : apiTradeStateEnumAdapter(source?.tradeState),
  };
}
