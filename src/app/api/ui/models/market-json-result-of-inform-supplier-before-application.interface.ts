import { InformSupplierBeforeApplication } from './inform-supplier-before-application.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfInformSupplierBeforeApplication = MarketJsonVoidResultAlt & { 'data'?: InformSupplierBeforeApplication | null; };
