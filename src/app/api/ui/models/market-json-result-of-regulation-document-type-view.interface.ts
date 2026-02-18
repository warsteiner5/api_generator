import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { RegulationDocumentTypeView } from './regulation-document-type-view.interface';

export type MarketJsonResultOfRegulationDocumentTypeView = MarketJsonVoidResultAlt & { 'data'?: RegulationDocumentTypeView | null; };
