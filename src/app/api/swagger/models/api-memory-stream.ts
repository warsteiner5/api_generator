/* tslint:disable */
/* eslint-disable */
import { ApiStreamAltDto } from '../models/api-stream';
export type ApiMemoryStreamAltDto = ApiStreamAltDto & {
'CanRead'?: boolean;
'CanSeek'?: boolean;
'CanWrite'?: boolean;
'Capacity'?: number;
'Length'?: number;
'Position'?: number;
};
