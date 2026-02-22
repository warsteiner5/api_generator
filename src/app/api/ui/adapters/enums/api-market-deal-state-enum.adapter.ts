import { MarketDealStateEnum } from '../../enums/market-deal-state.enum';
import { ApiMarketDealStateEnum } from '../../../swagger/models/api-market-deal-state-enum';

export const apiMarketDealStateEnumAdapter = (source?: MarketDealStateEnum | null): ApiMarketDealStateEnum => {
  switch (source) {
    case MarketDealStateEnum.WaitingOffer:
      return ApiMarketDealStateEnum.WaitingOffer;
    case MarketDealStateEnum.AgreementDeal:
      return ApiMarketDealStateEnum.AgreementDeal;
    case MarketDealStateEnum.AgreementContract:
      return ApiMarketDealStateEnum.AgreementContract;
    case MarketDealStateEnum.CompletedDeal:
      return ApiMarketDealStateEnum.CompletedDeal;
    case MarketDealStateEnum.CanceledDeal:
      return ApiMarketDealStateEnum.CanceledDeal;
    case MarketDealStateEnum.ReadyForShipment:
      return ApiMarketDealStateEnum.ReadyForShipment;
    case MarketDealStateEnum.Draft:
      return ApiMarketDealStateEnum.Draft;
    case MarketDealStateEnum.Retrading:
      return ApiMarketDealStateEnum.Retrading;
    case MarketDealStateEnum.ReadyToPublish:
      return ApiMarketDealStateEnum.ReadyToPublish;
    case MarketDealStateEnum.NotTookPlace:
      return ApiMarketDealStateEnum.NotTookPlace;
    case MarketDealStateEnum.Archive:
      return ApiMarketDealStateEnum.Archive;
    case MarketDealStateEnum.AuctionInProgress:
      return ApiMarketDealStateEnum.AuctionInProgress;
    default:
      throw new Error(`Enum value is not defined: MarketDealStateEnum=${String(source)}`);
  }
}
