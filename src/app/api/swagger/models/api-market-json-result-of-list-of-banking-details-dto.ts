/* tslint:disable */
/* eslint-disable */
import { ApiBankingDetailsDto } from '../models/api-banking-details-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfListOfBankingDetailsDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiBankingDetailsDto> | null;
};
