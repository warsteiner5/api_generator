/* tslint:disable */
/* eslint-disable */
import { ApiImportExcelParticipantOfferToTradeResultAltDto } from '../models/api-import-excel-participant-offer-to-trade-result';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfImportExcelParticipantOfferToTradeResult = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiImportExcelParticipantOfferToTradeResultAltDto | null;
};
