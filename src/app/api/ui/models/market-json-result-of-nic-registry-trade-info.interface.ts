import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { NicRegistryTradeInfo } from './nic-registry-trade-info.interface';

export type MarketJsonResultOfNicRegistryTradeInfo = MarketJsonVoidResultAlt & { 'data'?: NicRegistryTradeInfo | null; };
