/* tslint:disable */
/* eslint-disable */
import { ApiFormTemplateDto } from '../models/api-form-template-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfFormTemplateDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiFormTemplateDto | null;
};
