/* tslint:disable */
/* eslint-disable */
import { ApiMarshalByRefObjectAltDto } from '../models/api-marshal-by-ref-object';
export type ApiStreamAltDto = ApiMarshalByRefObjectAltDto & {
'CanTimeout'?: boolean;
'ReadTimeout'?: number;
'WriteTimeout'?: number;
};
