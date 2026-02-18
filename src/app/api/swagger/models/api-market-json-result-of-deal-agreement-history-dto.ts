/* tslint:disable */
/* eslint-disable */
import { ApiDealAgreementHistoryDto } from '../models/api-deal-agreement-history-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfDealAgreementHistoryDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiDealAgreementHistoryDto | null;
};
