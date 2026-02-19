/* tslint:disable */
/* eslint-disable */
import { ApiCardPaymentAvailabilityAltDto } from '../models/api-card-payment-availability';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfCardPaymentAvailabilityAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiCardPaymentAvailabilityAltDto | null;
};
