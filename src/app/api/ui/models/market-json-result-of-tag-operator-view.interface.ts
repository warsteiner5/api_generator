import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { TagOperatorView } from './tag-operator-view.interface';

export type MarketJsonResultOfTagOperatorView = MarketJsonVoidResultAlt & { 'data'?: TagOperatorView | null; };
