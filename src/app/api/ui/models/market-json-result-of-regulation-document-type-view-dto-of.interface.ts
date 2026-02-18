import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { RegulationDocumentTypeView } from './regulation-document-type-view.interface';

export type MarketJsonResultOfRegulationDocumentTypeViewDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<RegulationDocumentTypeView> | null; };
