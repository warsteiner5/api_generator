import { ApplicationDocument } from './application-document.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfApplicationDocument = MarketJsonVoidResultAlt & { 'data'?: ApplicationDocument | null; };
