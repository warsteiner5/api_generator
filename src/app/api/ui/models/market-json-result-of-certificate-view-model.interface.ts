import { CertificateViewModel } from './certificate-view-model.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfCertificateViewModel = MarketJsonVoidResultAlt & { 'data'?: CertificateViewModel | null; };
