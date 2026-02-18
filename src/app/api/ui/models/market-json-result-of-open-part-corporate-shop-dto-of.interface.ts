import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OpenPartCorporateShop } from './open-part-corporate-shop.interface';

export type MarketJsonResultOfOpenPartCorporateShopDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<OpenPartCorporateShop> | null; };
