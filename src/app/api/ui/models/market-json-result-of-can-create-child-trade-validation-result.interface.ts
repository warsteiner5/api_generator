import { CanCreateChildTradeValidationResultAlt } from './can-create-child-trade-validation-result-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfCanCreateChildTradeValidationResult = MarketJsonVoidResultAlt & { 'data'?: CanCreateChildTradeValidationResultAlt | null; };
