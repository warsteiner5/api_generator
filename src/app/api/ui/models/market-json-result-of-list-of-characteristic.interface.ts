import { Characteristic } from './characteristic.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfListOfCharacteristic = MarketJsonVoidResultAlt & { 'data'?: Array<Characteristic> | null; };
