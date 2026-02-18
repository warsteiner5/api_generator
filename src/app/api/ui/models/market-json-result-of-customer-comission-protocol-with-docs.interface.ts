import { CustomerComissionProtocolWithDocs } from './customer-comission-protocol-with-docs.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfCustomerComissionProtocolWithDocs = MarketJsonVoidResultAlt & { 'data'?: CustomerComissionProtocolWithDocs | null; };
