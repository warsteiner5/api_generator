import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { Registry } from './registry.interface';

export type MarketJsonResultOfIReadOnlyCollectionOfRegistry = MarketJsonVoidResultAlt & { 'data'?: Array<Registry> | null; };
