import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { NicRegistryEntry } from './nic-registry-entry.interface';

export type MarketJsonResultOfNicRegistryEntry = MarketJsonVoidResultAlt & { 'data'?: NicRegistryEntry | null; };
