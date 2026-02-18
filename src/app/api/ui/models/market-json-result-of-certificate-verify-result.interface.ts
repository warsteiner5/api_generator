import { CertificateVerifyResultAlt } from './certificate-verify-result-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfCertificateVerifyResult = MarketJsonVoidResultAlt & { 'data'?: CertificateVerifyResultAlt | null; };
