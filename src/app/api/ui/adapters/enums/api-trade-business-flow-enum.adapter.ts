import { TradeBusinessFlowEnum } from '../../enums/trade-business-flow.enum';
import { ApiTradeBusinessFlowEnum } from '../../../swagger/models/api-trade-business-flow-enum';

export const apiTradeBusinessFlowEnumAdapter = (source?: TradeBusinessFlowEnum | null): ApiTradeBusinessFlowEnum => {
  switch (source) {
    case TradeBusinessFlowEnum.Common:
      return ApiTradeBusinessFlowEnum.Common;
    case TradeBusinessFlowEnum.Fsk:
      return ApiTradeBusinessFlowEnum.Fsk;
    case TradeBusinessFlowEnum.Zmo:
      return ApiTradeBusinessFlowEnum.Zmo;
    case TradeBusinessFlowEnum.Smb:
      return ApiTradeBusinessFlowEnum.Smb;
    case TradeBusinessFlowEnum.Competitive:
      return ApiTradeBusinessFlowEnum.Competitive;
    case TradeBusinessFlowEnum.Market:
      return ApiTradeBusinessFlowEnum.Market;
    case TradeBusinessFlowEnum.Rzd:
      return ApiTradeBusinessFlowEnum.Rzd;
    case TradeBusinessFlowEnum.RusPost:
      return ApiTradeBusinessFlowEnum.RusPost;
    case TradeBusinessFlowEnum.Mmo:
      return ApiTradeBusinessFlowEnum.Mmo;
    case TradeBusinessFlowEnum.MmoV2:
      return ApiTradeBusinessFlowEnum.MmoV2;
    case TradeBusinessFlowEnum.ExternalStatusUpdate:
      return ApiTradeBusinessFlowEnum.ExternalStatusUpdate;
    case TradeBusinessFlowEnum.PreliminaryOffer:
      return ApiTradeBusinessFlowEnum.PreliminaryOffer;
    default:
      throw new Error(`Enum value is not defined: TradeBusinessFlowEnum=${String(source)}`);
  }
}
