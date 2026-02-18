import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { ParsedCertificate } from './parsed-certificate.interface';

export type MarketJsonResultOfParsedCertificate = MarketJsonVoidResultAlt & { 'data'?: ParsedCertificate | null; };
