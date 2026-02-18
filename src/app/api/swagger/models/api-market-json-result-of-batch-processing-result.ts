/* tslint:disable */
/* eslint-disable */
import { ApiBatchProcessingResultAltDto } from '../models/api-batch-processing-result';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfBatchProcessingResult = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiBatchProcessingResultAltDto | null;
};
