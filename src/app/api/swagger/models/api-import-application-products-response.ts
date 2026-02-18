/* tslint:disable */
/* eslint-disable */
import { ApiImportedApplicationProductDto } from '../models/api-imported-application-product-dto';
export interface ApiImportApplicationProductsResponseAltDto {
  ApplicationProducts?: Array<ApiImportedApplicationProductDto> | null;
  ErrorText?: string | null;
  ErrorsFileUrl?: string | null;
  IsSuccess?: boolean;
}
