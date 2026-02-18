import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OrganizationRegistrationAgreementFile } from './organization-registration-agreement-file.interface';

export type MarketJsonResultOfListOfOrganizationRegistrationAgreementFile = MarketJsonVoidResultAlt & { 'data'?: Array<OrganizationRegistrationAgreementFile> | null; };
