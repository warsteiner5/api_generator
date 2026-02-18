import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OpenPartUserShop } from './open-part-user-shop.interface';

export type MarketJsonResultOfOpenPartUserShopDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<OpenPartUserShop> | null; };
