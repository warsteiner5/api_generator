/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMunicipalityOktmoDto } from '../models/api-municipality-oktmo-dto';
export type ApiMarketJsonResultOfMunicipalityOktmoDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiMunicipalityOktmoDto | null;
};
