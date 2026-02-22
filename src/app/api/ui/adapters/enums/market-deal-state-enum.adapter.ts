import { ApiMarketDealStateEnum } from '../../../swagger/models/api-market-deal-state-enum';
import { MarketDealStateEnum } from '../../enums/market-deal-state.enum';

export const marketDealStateEnumAdapter = (source?: ApiMarketDealStateEnum | null): MarketDealStateEnum => {
  switch (source) {
    case ApiMarketDealStateEnum.WaitingOffer:
      return MarketDealStateEnum.WaitingOffer;
    case ApiMarketDealStateEnum.AgreementDeal:
      return MarketDealStateEnum.AgreementDeal;
    case ApiMarketDealStateEnum.AgreementContract:
      return MarketDealStateEnum.AgreementContract;
    case ApiMarketDealStateEnum.CompletedDeal:
      return MarketDealStateEnum.CompletedDeal;
    case ApiMarketDealStateEnum.CanceledDeal:
      return MarketDealStateEnum.CanceledDeal;
    case ApiMarketDealStateEnum.ReadyForShipment:
      return MarketDealStateEnum.ReadyForShipment;
    case ApiMarketDealStateEnum.Draft:
      return MarketDealStateEnum.Draft;
    case ApiMarketDealStateEnum.Retrading:
      return MarketDealStateEnum.Retrading;
    case ApiMarketDealStateEnum.ReadyToPublish:
      return MarketDealStateEnum.ReadyToPublish;
    case ApiMarketDealStateEnum.NotTookPlace:
      return MarketDealStateEnum.NotTookPlace;
    case ApiMarketDealStateEnum.Archive:
      return MarketDealStateEnum.Archive;
    case ApiMarketDealStateEnum.AuctionInProgress:
      return MarketDealStateEnum.AuctionInProgress;
    default:
      throw new Error(`Enum value is not defined: ApiMarketDealStateEnum=${String(source)}`);
  }
}
