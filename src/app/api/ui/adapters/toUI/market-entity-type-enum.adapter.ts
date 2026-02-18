import { ApiMarketEntityTypeEnum } from '../../../swagger/models/api-market-entity-type-enum';
import { MarketEntityTypeEnum } from '../../enums/market-entity-type.enum';

export function adaptMarketEntityTypeEnumToUI(source?: ApiMarketEntityTypeEnum | null): MarketEntityTypeEnum {
  switch (source) {
    case ApiMarketEntityTypeEnum.Offer:
      return MarketEntityTypeEnum.Offer;
    case ApiMarketEntityTypeEnum.Trade:
      return MarketEntityTypeEnum.Trade;
    case ApiMarketEntityTypeEnum.Deal:
      return MarketEntityTypeEnum.Deal;
    case ApiMarketEntityTypeEnum.Contract:
      return MarketEntityTypeEnum.Contract;
    case ApiMarketEntityTypeEnum.Application:
      return MarketEntityTypeEnum.Application;
    case ApiMarketEntityTypeEnum.Organization:
      return MarketEntityTypeEnum.Organization;
    case ApiMarketEntityTypeEnum.Discussion:
      return MarketEntityTypeEnum.Discussion;
    case ApiMarketEntityTypeEnum.TradeLot:
      return MarketEntityTypeEnum.TradeLot;
    case ApiMarketEntityTypeEnum.TradePlan:
      return MarketEntityTypeEnum.TradePlan;
    case ApiMarketEntityTypeEnum.Feedback:
      return MarketEntityTypeEnum.Feedback;
    case ApiMarketEntityTypeEnum.RequirementRequest:
      return MarketEntityTypeEnum.RequirementRequest;
    case ApiMarketEntityTypeEnum.ApprovalRequest:
      return MarketEntityTypeEnum.ApprovalRequest;
    case ApiMarketEntityTypeEnum.OrderAgreementHistory:
      return MarketEntityTypeEnum.OrderAgreementHistory;
    case ApiMarketEntityTypeEnum.FinancialTransaction:
      return MarketEntityTypeEnum.FinancialTransaction;
    case ApiMarketEntityTypeEnum.Characteristic:
      return MarketEntityTypeEnum.Characteristic;
    case ApiMarketEntityTypeEnum.PriceList:
      return MarketEntityTypeEnum.PriceList;
    case ApiMarketEntityTypeEnum.PriceListImportTask:
      return MarketEntityTypeEnum.PriceListImportTask;
    case ApiMarketEntityTypeEnum.Cart:
      return MarketEntityTypeEnum.Cart;
    case ApiMarketEntityTypeEnum.Tenant:
      return MarketEntityTypeEnum.Tenant;
    case ApiMarketEntityTypeEnum.LotItem:
      return MarketEntityTypeEnum.LotItem;
    default:
      throw new Error(`Enum value is not defined: ApiMarketEntityTypeEnum=${String(source)}`);
  }
}
