import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { NotTookPlaceLinkValidationResultAlt } from './not-took-place-link-validation-result-alt.interface';

export type MarketJsonResultOfNotTookPlaceLinkValidationResult = MarketJsonVoidResultAlt & { 'data'?: NotTookPlaceLinkValidationResultAlt | null; };
