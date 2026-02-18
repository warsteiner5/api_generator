import { MarketDealPosition } from './market-deal-position.interface';
import { MarketFullDeal } from './market-full-deal.interface';
import { OrderStateEnum } from '../enums/order-state.enum';

export type MarketFullOrderDeal = MarketFullDeal & { 'OrderState'?: OrderStateEnum; 'MainPictureId'?: string | null; 'OfferId'?: number; 'ContractIsAcceptedByCustomer'?: boolean; 'DealPositions'?: Array<MarketDealPosition> | null; 'TradePrice'?: number | null; 'IsDifferencesProtocolAllowed'?: boolean; 'IsDealPaperFormAllowed'?: boolean; };
