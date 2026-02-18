import { EquivalentTable } from './equivalent-table.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfEquivalentTable = MarketJsonVoidResultAlt & { 'data'?: EquivalentTable | null; };
