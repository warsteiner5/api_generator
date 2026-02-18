import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { SearchResultOfRegulationDocumentView } from './search-result-of-regulation-document-view.interface';

export type MarketJsonResultOfSearchResultOfRegulationDocumentView = MarketJsonVoidResultAlt & { 'data'?: SearchResultOfRegulationDocumentView | null; };
