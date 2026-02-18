import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OrderFromCartCreatedInfoAlt } from './order-from-cart-created-info-alt.interface';

export type MarketJsonResultOfOrderFromCartCreatedInfo = MarketJsonVoidResultAlt & { 'data'?: OrderFromCartCreatedInfoAlt | null; };
