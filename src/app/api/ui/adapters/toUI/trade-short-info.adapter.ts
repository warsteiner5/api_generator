import { ApiTradeShortInfoDto } from '../../../swagger/models/api-trade-short-info-dto';
import { TradeShortInfo } from '../../models/trade-short-info.interface';
import { adaptPurchaseMethodTypeEnumToUI } from './purchase-method-type-enum.adapter';
import { adaptTradeLotToUI } from './trade-lot.adapter';
import { adaptTradeStateEnumToUI } from './trade-state-enum.adapter';

export function adaptTradeShortInfoToUI(source?: ApiTradeShortInfoDto | null): TradeShortInfo {
  return {
    conditionsOfPayment: source?.ConditionsOfPayment ?? '',
    externalSourcePlatformNumber: source?.ExternalSourcePlatformNumber ?? '',
    fillingApplicationEndDate: source?.FillingApplicationEndDate ?? '',
    id: source?.Id ?? 0,
    lots: (source?.Lots ?? []).map((item) => adaptTradeLotToUI(item)),
    notificationNumber: source?.NotificationNumber ?? '',
    organizerId: source?.OrganizerId ?? 0,
    publicationDate: source?.PublicationDate ?? '',
    purchaseMethod: adaptPurchaseMethodTypeEnumToUI(source?.PurchaseMethod),
    tradeDescription: source?.TradeDescription ?? '',
    tradeState: adaptTradeStateEnumToUI(source?.TradeState),
  };
}
