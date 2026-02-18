/* tslint:disable */
/* eslint-disable */
import { ApiUpdatePropertyOfBooleanAltDto } from '../models/api-update-property-of-boolean';
import { ApiUpdatePropertyOfNullableDecimalAltDto } from '../models/api-update-property-of-nullable-decimal';
import { ApiUpdatePropertyOfStringAltDto } from '../models/api-update-property-of-string';
import { ApiUpdatePropertyOfStringOf } from '../models/api-update-property-of-string-of';
export interface ApiUpdateDataModelAltDto {
  CategoryId?: ApiUpdatePropertyOfStringAltDto | null;
  CountryCode?: ApiUpdatePropertyOfStringAltDto | null;
  IsRemoved?: ApiUpdatePropertyOfBooleanAltDto | null;
  IsVisible?: ApiUpdatePropertyOfBooleanAltDto | null;
  OkeiCode?: ApiUpdatePropertyOfStringAltDto | null;
  Okpd2Codes?: ApiUpdatePropertyOfStringOf | null;
  Price?: ApiUpdatePropertyOfNullableDecimalAltDto | null;
  ProductDescription?: ApiUpdatePropertyOfStringAltDto | null;
  ProductName?: ApiUpdatePropertyOfStringAltDto | null;
  Quantity?: ApiUpdatePropertyOfNullableDecimalAltDto | null;
  RegionCodes?: ApiUpdatePropertyOfStringOf | null;
  RegionalProductSignChecked?: ApiUpdatePropertyOfBooleanAltDto | null;
}
