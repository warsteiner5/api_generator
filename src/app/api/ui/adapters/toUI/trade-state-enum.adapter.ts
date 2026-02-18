import { ApiTradeStateEnum } from '../../../swagger/models/api-trade-state-enum';
import { TradeStateEnum } from '../../enums/trade-state.enum';

export function adaptTradeStateEnumToUI(source?: ApiTradeStateEnum | null): TradeStateEnum {
  switch (source) {
    case ApiTradeStateEnum.Draft:
      return TradeStateEnum.Draft;
    case ApiTradeStateEnum.Removed:
      return TradeStateEnum.Removed;
    case ApiTradeStateEnum.Publishing:
      return TradeStateEnum.Publishing;
    case ApiTradeStateEnum.FillingApplications:
      return TradeStateEnum.FillingApplications;
    case ApiTradeStateEnum.AgreementConditions:
      return TradeStateEnum.AgreementConditions;
    case ApiTradeStateEnum.NotTookPlace:
      return TradeStateEnum.NotTookPlace;
    case ApiTradeStateEnum.Canceled:
      return TradeStateEnum.Canceled;
    case ApiTradeStateEnum.ClosedWithoutDeals:
      return TradeStateEnum.ClosedWithoutDeals;
    case ApiTradeStateEnum.DealSigning:
      return TradeStateEnum.DealSigning;
    case ApiTradeStateEnum.DealSigned:
      return TradeStateEnum.DealSigned;
    case ApiTradeStateEnum.Archive:
      return TradeStateEnum.Archive;
    case ApiTradeStateEnum.Retrading:
      return TradeStateEnum.Retrading;
    default:
      throw new Error(`Enum value is not defined: ApiTradeStateEnum=${String(source)}`);
  }
}
