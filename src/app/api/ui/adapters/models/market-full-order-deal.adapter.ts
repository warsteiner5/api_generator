import { ApiMarketFullOrderDealDto } from '../../../swagger/models/api-market-full-order-deal-dto';
import { MarketFullOrderDeal } from '../../models/market-full-order-deal.interface';
import { marketDealPositionAdapter } from './market-deal-position.adapter';
import { marketFullDealAdapter } from './market-full-deal.adapter';
import { orderStateEnumAdapter } from '../enums/order-state-enum.adapter';

export const marketFullOrderDealAdapter = (source?: ApiMarketFullOrderDealDto | null): MarketFullOrderDeal => {
  return {
    ...marketFullDealAdapter(source as unknown as Parameters<typeof marketFullDealAdapter>[0]),
    orderState: source?.OrderState === null ? undefined : orderStateEnumAdapter(source?.OrderState),
    mainPictureId: source?.MainPictureId,
    offerId: source?.OfferId,
    contractIsAcceptedByCustomer: source?.ContractIsAcceptedByCustomer,
    dealPositions: source?.DealPositions?.map((item) => marketDealPositionAdapter(item)),
    tradePrice: source?.TradePrice,
    dealPrice: source?.DealPrice,
    isDifferencesProtocolAllowed: source?.IsDifferencesProtocolAllowed,
    isDealPaperFormAllowed: source?.IsDealPaperFormAllowed,
  };
}
