import { KsrValueAlt } from './ksr-value-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfIReadOnlyCollectionOfKsrValue = MarketJsonVoidResultAlt & { 'data'?: Array<KsrValueAlt> | null; };
