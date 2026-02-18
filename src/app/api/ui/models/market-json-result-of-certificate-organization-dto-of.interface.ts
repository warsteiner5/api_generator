import { CertificateOrganization } from './certificate-organization.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfCertificateOrganizationDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<CertificateOrganization> | null; };
