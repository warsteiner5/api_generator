/* tslint:disable */
/* eslint-disable */
import { ApiFileSignDto } from '../models/api-file-sign-dto';
import { ApiTradeDto2 } from '../models/api-trade-dto-2';
export type ApiTradeDtoWithSignatureAltDto = ApiTradeDto2 & {
'FileSigns'?: Array<ApiFileSignDto> | null;
};
