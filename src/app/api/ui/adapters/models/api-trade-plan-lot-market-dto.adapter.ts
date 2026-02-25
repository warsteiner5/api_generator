import { TradePlanLotMarket } from '../../models/trade-plan-lot-market.interface';
import { ApiTradePlanLotMarketDto } from '../../../swagger/models/api-trade-plan-lot-market-dto';
import { apiBaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAdapter } from './api-base-contract-dto-with-id-and-row-version-of-integer-and-integer.adapter';
import { apiPurchasePlanKindAltEnumAdapter } from '../enums/api-purchase-plan-kind.adapter';
import { apiTradePlanLotItemMarketDtoAdapter } from './api-trade-plan-lot-item-market-dto.adapter';

export const apiTradePlanLotMarketDtoAdapter = (source?: TradePlanLotMarket | null): ApiTradePlanLotMarketDto => {
  return {
    ...apiBaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAdapter(source as unknown as Parameters<typeof apiBaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAdapter>[0]),
    OrderNumber: source?.orderNumber,
    Subject: source?.subject,
    StartingPrice: source?.startingPrice,
    StartingPriceWithoutVat: source?.startingPriceWithoutVat,
    PlanDepositPeriod: source?.planDepositPeriod,
    ExecutionAgreementDate: source?.executionAgreementDate,
    MethodPurchase: source?.methodPurchase,
    MethodPurchaseCode: source?.methodPurchaseCode,
    PlanNumber: source?.planNumber,
    PlanId: source?.planId,
    PurchasePlanKind: source?.purchasePlanKind === null ? undefined : apiPurchasePlanKindAltEnumAdapter(source?.purchasePlanKind),
    Okato: source?.okato,
    RegionName: source?.regionName,
    Items: source?.items?.map((item) => apiTradePlanLotItemMarketDtoAdapter(item)),
    Guid: source?.guid,
    CustomerName: source?.customerName,
    TradeId: source?.tradeId,
    TradeIds: source?.tradeIds,
    OrganizerId: source?.organizerId,
    OrganizerGuid: source?.organizerGuid,
    WorkGroups: source?.workGroups,
    BusinessUnitCode: source?.businessUnitCode,
    CanCreateTrade: source?.canCreateTrade,
  };
}
