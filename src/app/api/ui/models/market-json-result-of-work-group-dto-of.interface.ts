import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { WorkGroup } from './work-group.interface';

export type MarketJsonResultOfWorkGroupDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<WorkGroup> | null; };
