import { Employee } from './employee.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfEmployee = MarketJsonVoidResultAlt & { 'data'?: Employee | null; };
