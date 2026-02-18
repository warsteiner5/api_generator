import { FavoriteCountInfo } from './favorite-count-info.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfFavoriteCountInfo = MarketJsonVoidResultAlt & { 'data'?: FavoriteCountInfo | null; };
