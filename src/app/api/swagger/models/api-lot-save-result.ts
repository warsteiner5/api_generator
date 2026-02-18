/* tslint:disable */
/* eslint-disable */
import { ApiSaveResultOfIntegerAltDto } from '../models/api-save-result-of-integer';
export type ApiLotSaveResultAltDto = ApiSaveResultOfIntegerAltDto & {
'Customers'?: Array<ApiSaveResultOfIntegerAltDto> | null;
'Items'?: Array<ApiSaveResultOfIntegerAltDto> | null;
};
