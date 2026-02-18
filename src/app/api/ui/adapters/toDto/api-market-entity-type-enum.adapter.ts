import { MarketEntityTypeEnum } from '../../enums/market-entity-type.enum';
import { ApiMarketEntityTypeEnum } from '../../../swagger/models/api-market-entity-type-enum';

export function adaptApiMarketEntityTypeEnum(source?: MarketEntityTypeEnum | null): ApiMarketEntityTypeEnum {
  switch (source) {
    case MarketEntityTypeEnum.Offer:
      return ApiMarketEntityTypeEnum.Offer;
    case MarketEntityTypeEnum.Trade:
      return ApiMarketEntityTypeEnum.Trade;
    case MarketEntityTypeEnum.Deal:
      return ApiMarketEntityTypeEnum.Deal;
    case MarketEntityTypeEnum.Contract:
      return ApiMarketEntityTypeEnum.Contract;
    case MarketEntityTypeEnum.Application:
      return ApiMarketEntityTypeEnum.Application;
    case MarketEntityTypeEnum.Organization:
      return ApiMarketEntityTypeEnum.Organization;
    case MarketEntityTypeEnum.Discussion:
      return ApiMarketEntityTypeEnum.Discussion;
    case MarketEntityTypeEnum.TradeLot:
      return ApiMarketEntityTypeEnum.TradeLot;
    case MarketEntityTypeEnum.TradePlan:
      return ApiMarketEntityTypeEnum.TradePlan;
    case MarketEntityTypeEnum.Feedback:
      return ApiMarketEntityTypeEnum.Feedback;
    case MarketEntityTypeEnum.RequirementRequest:
      return ApiMarketEntityTypeEnum.RequirementRequest;
    case MarketEntityTypeEnum.ApprovalRequest:
      return ApiMarketEntityTypeEnum.ApprovalRequest;
    case MarketEntityTypeEnum.OrderAgreementHistory:
      return ApiMarketEntityTypeEnum.OrderAgreementHistory;
    case MarketEntityTypeEnum.FinancialTransaction:
      return ApiMarketEntityTypeEnum.FinancialTransaction;
    case MarketEntityTypeEnum.Characteristic:
      return ApiMarketEntityTypeEnum.Characteristic;
    case MarketEntityTypeEnum.PriceList:
      return ApiMarketEntityTypeEnum.PriceList;
    case MarketEntityTypeEnum.PriceListImportTask:
      return ApiMarketEntityTypeEnum.PriceListImportTask;
    case MarketEntityTypeEnum.Cart:
      return ApiMarketEntityTypeEnum.Cart;
    case MarketEntityTypeEnum.Tenant:
      return ApiMarketEntityTypeEnum.Tenant;
    case MarketEntityTypeEnum.LotItem:
      return ApiMarketEntityTypeEnum.LotItem;
    default:
      throw new Error(`Enum value is not defined: MarketEntityTypeEnum=${String(source)}`);
  }
}
