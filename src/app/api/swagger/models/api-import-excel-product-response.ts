/* tslint:disable */
/* eslint-disable */
import { ApiProductDto2 } from '../models/api-product-dto-2';
export interface ApiImportExcelProductResponseAltDto {
  ErrorText?: string | null;
  ErrorsFileUrl?: string | null;
  IsSuccess?: boolean;
  Products?: Array<ApiProductDto2> | null;
}
