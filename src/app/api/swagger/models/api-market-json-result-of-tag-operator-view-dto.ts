/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiTagOperatorViewDto } from '../models/api-tag-operator-view-dto';
export type ApiMarketJsonResultOfTagOperatorViewDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiTagOperatorViewDto | null;
};
