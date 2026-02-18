import { TradeStateEnum } from '../../enums/trade-state.enum';
import { ApiTradeStateEnum } from '../../../swagger/models/api-trade-state-enum';

export function adaptApiTradeStateEnum(source?: TradeStateEnum | null): ApiTradeStateEnum {
  switch (source) {
    case TradeStateEnum.Draft:
      return ApiTradeStateEnum.Draft;
    case TradeStateEnum.Removed:
      return ApiTradeStateEnum.Removed;
    case TradeStateEnum.Publishing:
      return ApiTradeStateEnum.Publishing;
    case TradeStateEnum.FillingApplications:
      return ApiTradeStateEnum.FillingApplications;
    case TradeStateEnum.AgreementConditions:
      return ApiTradeStateEnum.AgreementConditions;
    case TradeStateEnum.NotTookPlace:
      return ApiTradeStateEnum.NotTookPlace;
    case TradeStateEnum.Canceled:
      return ApiTradeStateEnum.Canceled;
    case TradeStateEnum.ClosedWithoutDeals:
      return ApiTradeStateEnum.ClosedWithoutDeals;
    case TradeStateEnum.DealSigning:
      return ApiTradeStateEnum.DealSigning;
    case TradeStateEnum.DealSigned:
      return ApiTradeStateEnum.DealSigned;
    case TradeStateEnum.Archive:
      return ApiTradeStateEnum.Archive;
    case TradeStateEnum.Retrading:
      return ApiTradeStateEnum.Retrading;
    default:
      throw new Error(`Enum value is not defined: TradeStateEnum=${String(source)}`);
  }
}
