/* tslint:disable */
/* eslint-disable */
import { ApiFederalLawDto } from '../models/api-federal-law-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfListOfFederalLawDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiFederalLawDto> | null;
};
