import { ApiTradePlanLotMarketDto } from '../../../swagger/models/api-trade-plan-lot-market-dto';
import { TradePlanLotMarket } from '../../models/trade-plan-lot-market.interface';
import { baseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAdapter } from './base-contract-dto-with-id-and-row-version-of-integer-and-integer.adapter';
import { purchasePlanKindAltEnumAdapter } from '../enums/purchase-plan-kind-alt-enum.adapter';
import { tradePlanLotItemMarketAdapter } from './trade-plan-lot-item-market.adapter';

export const tradePlanLotMarketAdapter = (source?: ApiTradePlanLotMarketDto | null): TradePlanLotMarket => {
  return {
    ...baseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAdapter(source as unknown as Parameters<typeof baseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAdapter>[0]),
    orderNumber: source?.OrderNumber,
    subject: source?.Subject,
    startingPrice: source?.StartingPrice,
    startingPriceWithoutVat: source?.StartingPriceWithoutVat,
    planDepositPeriod: source?.PlanDepositPeriod,
    executionAgreementDate: source?.ExecutionAgreementDate,
    methodPurchase: source?.MethodPurchase,
    methodPurchaseCode: source?.MethodPurchaseCode,
    planNumber: source?.PlanNumber,
    planId: source?.PlanId,
    purchasePlanKind: source?.PurchasePlanKind === null ? undefined : purchasePlanKindAltEnumAdapter(source?.PurchasePlanKind),
    okato: source?.Okato,
    regionName: source?.RegionName,
    items: source?.Items?.map((item) => tradePlanLotItemMarketAdapter(item)),
    guid: source?.Guid,
    customerName: source?.CustomerName,
    tradeId: source?.TradeId,
    tradeIds: source?.TradeIds,
    organizerId: source?.OrganizerId,
    organizerGuid: source?.OrganizerGuid,
    workGroups: source?.WorkGroups,
    businessUnitCode: source?.BusinessUnitCode,
    canCreateTrade: source?.CanCreateTrade,
  };
}
