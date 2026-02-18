import { AdditionalAgreement } from './additional-agreement.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfIListOfAdditionalAgreement = MarketJsonVoidResultAlt & { 'data'?: Array<AdditionalAgreement> | null; };
