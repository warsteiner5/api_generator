import { MarketFullOrderDeal } from '../../models/market-full-order-deal.interface';
import { ApiMarketFullOrderDealDto } from '../../../swagger/models/api-market-full-order-deal-dto';
import { apiMarketDealPositionDtoAdapter } from './api-market-deal-position-dto.adapter';
import { apiMarketFullDealDtoAdapter } from './api-market-full-deal-dto.adapter';
import { apiOrderStateEnumAdapter } from '../enums/api-order-state-enum.adapter';

export const apiMarketFullOrderDealDtoAdapter = (source?: MarketFullOrderDeal | null): ApiMarketFullOrderDealDto => {
  return {
    ...apiMarketFullDealDtoAdapter(source as unknown as Parameters<typeof apiMarketFullDealDtoAdapter>[0]),
    OrderState: source?.orderState === null ? undefined : apiOrderStateEnumAdapter(source?.orderState),
    MainPictureId: source?.mainPictureId,
    OfferId: source?.offerId,
    ContractIsAcceptedByCustomer: source?.contractIsAcceptedByCustomer,
    DealPositions: source?.dealPositions?.map((item) => apiMarketDealPositionDtoAdapter(item)),
    TradePrice: source?.tradePrice,
    DealPrice: source?.dealPrice,
    IsDifferencesProtocolAllowed: source?.isDifferencesProtocolAllowed,
    IsDealPaperFormAllowed: source?.isDealPaperFormAllowed,
  };
}
