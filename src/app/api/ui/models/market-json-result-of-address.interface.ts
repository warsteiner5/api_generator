import { AddressDto2 } from './address-dto-2.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfAddress = MarketJsonVoidResultAlt & { 'data'?: AddressDto2 | null; };
