import { EmployeeAgreement } from './employee-agreement.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfEmployeeAgreement = MarketJsonVoidResultAlt & { 'data'?: EmployeeAgreement | null; };
