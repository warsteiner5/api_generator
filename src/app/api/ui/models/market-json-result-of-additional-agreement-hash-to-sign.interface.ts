import { AdditionalAgreementHashToSign } from './additional-agreement-hash-to-sign.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfAdditionalAgreementHashToSign = MarketJsonVoidResultAlt & { 'data'?: AdditionalAgreementHashToSign | null; };
