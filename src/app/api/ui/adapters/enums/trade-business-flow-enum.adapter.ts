import { ApiTradeBusinessFlowEnum } from '../../../swagger/models/api-trade-business-flow-enum';
import { TradeBusinessFlowEnum } from '../../enums/trade-business-flow.enum';

export const tradeBusinessFlowEnumAdapter = (source?: ApiTradeBusinessFlowEnum | null): TradeBusinessFlowEnum => {
  switch (source) {
    case ApiTradeBusinessFlowEnum.Common:
      return TradeBusinessFlowEnum.Common;
    case ApiTradeBusinessFlowEnum.Fsk:
      return TradeBusinessFlowEnum.Fsk;
    case ApiTradeBusinessFlowEnum.Zmo:
      return TradeBusinessFlowEnum.Zmo;
    case ApiTradeBusinessFlowEnum.Smb:
      return TradeBusinessFlowEnum.Smb;
    case ApiTradeBusinessFlowEnum.Competitive:
      return TradeBusinessFlowEnum.Competitive;
    case ApiTradeBusinessFlowEnum.Market:
      return TradeBusinessFlowEnum.Market;
    case ApiTradeBusinessFlowEnum.Rzd:
      return TradeBusinessFlowEnum.Rzd;
    case ApiTradeBusinessFlowEnum.RusPost:
      return TradeBusinessFlowEnum.RusPost;
    case ApiTradeBusinessFlowEnum.Mmo:
      return TradeBusinessFlowEnum.Mmo;
    case ApiTradeBusinessFlowEnum.MmoV2:
      return TradeBusinessFlowEnum.MmoV2;
    case ApiTradeBusinessFlowEnum.ExternalStatusUpdate:
      return TradeBusinessFlowEnum.ExternalStatusUpdate;
    case ApiTradeBusinessFlowEnum.PreliminaryOffer:
      return TradeBusinessFlowEnum.PreliminaryOffer;
    default:
      throw new Error(`Enum value is not defined: ApiTradeBusinessFlowEnum=${String(source)}`);
  }
}
