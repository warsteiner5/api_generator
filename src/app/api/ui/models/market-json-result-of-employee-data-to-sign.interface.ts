import { EmployeeDataToSign } from './employee-data-to-sign.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfEmployeeDataToSign = MarketJsonVoidResultAlt & { 'data'?: EmployeeDataToSign | null; };
