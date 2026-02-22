import { ApiTradeShortInfoDto } from '../../../swagger/models/api-trade-short-info-dto';
import { TradeShortInfo } from '../../models/trade-short-info.interface';
import { purchaseMethodTypeEnumAdapter } from '../enums/purchase-method-type-enum.adapter';
import { tradeLotAdapter } from './trade-lot.adapter';
import { tradeStateEnumAdapter } from '../enums/trade-state-enum.adapter';

export const tradeShortInfoAdapter = (source?: ApiTradeShortInfoDto | null): TradeShortInfo => {
  return {
    conditionsOfPayment: source?.ConditionsOfPayment,
    externalSourcePlatformNumber: source?.ExternalSourcePlatformNumber,
    fillingApplicationEndDate: source?.FillingApplicationEndDate,
    id: source?.Id,
    lots: source?.Lots?.map((item) => tradeLotAdapter(item)),
    notificationNumber: source?.NotificationNumber,
    organizerId: source?.OrganizerId,
    publicationDate: source?.PublicationDate,
    purchaseMethod: source?.PurchaseMethod === null ? undefined : purchaseMethodTypeEnumAdapter(source?.PurchaseMethod),
    tradeDescription: source?.TradeDescription,
    tradeState: source?.TradeState === null ? undefined : tradeStateEnumAdapter(source?.TradeState),
  };
}
