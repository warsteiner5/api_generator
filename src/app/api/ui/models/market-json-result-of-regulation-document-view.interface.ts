import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { RegulationDocumentView } from './regulation-document-view.interface';

export type MarketJsonResultOfRegulationDocumentView = MarketJsonVoidResultAlt & { 'data'?: RegulationDocumentView | null; };
