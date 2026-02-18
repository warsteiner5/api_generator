import { CardPaymentAvailabilityAlt } from './card-payment-availability-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfCardPaymentAvailability = MarketJsonVoidResultAlt & { 'data'?: CardPaymentAvailabilityAlt | null; };
