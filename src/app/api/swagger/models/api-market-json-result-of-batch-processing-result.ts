/* tslint:disable */
/* eslint-disable */
import { ApiBatchProcessingResultAltDto } from '../models/api-batch-processing-result';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfBatchProcessingResultAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiBatchProcessingResultAltDto | null;
};
