/* tslint:disable */
/* eslint-disable */
import { ApiMarketOrganizationProductDto } from '../models/api-market-organization-product-dto';
export interface ApiMarketOrganizationProfileProductsDto {
  IsExporter?: boolean;
  IsManufacturer?: boolean;
  Products?: Array<ApiMarketOrganizationProductDto> | null;
}
