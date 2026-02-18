import { DocumentPack } from './document-pack.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfDocumentPackDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<DocumentPack> | null; };
