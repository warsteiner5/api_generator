/* tslint:disable */
/* eslint-disable */
import { ApiUpdatePropertyOfBooleanAltDto } from '../models/api-update-property-of-boolean';
import { ApiUpdatePropertyOfNullableDecimalAltDto } from '../models/api-update-property-of-nullable-decimal';
import { ApiUpdatePropertyOfStringAltDto } from '../models/api-update-property-of-string';
import { ApiUpdatePropertyOfStringOfAltDto } from '../models/api-update-property-of-string-of';
export interface ApiUpdateDataModelAltDto {
  CategoryId?: ApiUpdatePropertyOfStringAltDto | null;
  CountryCode?: ApiUpdatePropertyOfStringAltDto | null;
  IsRemoved?: ApiUpdatePropertyOfBooleanAltDto | null;
  IsVisible?: ApiUpdatePropertyOfBooleanAltDto | null;
  OkeiCode?: ApiUpdatePropertyOfStringAltDto | null;
  Okpd2Codes?: ApiUpdatePropertyOfStringOfAltDto | null;
  Price?: ApiUpdatePropertyOfNullableDecimalAltDto | null;
  ProductDescription?: ApiUpdatePropertyOfStringAltDto | null;
  ProductName?: ApiUpdatePropertyOfStringAltDto | null;
  Quantity?: ApiUpdatePropertyOfNullableDecimalAltDto | null;
  RegionCodes?: ApiUpdatePropertyOfStringOfAltDto | null;
  RegionalProductSignChecked?: ApiUpdatePropertyOfBooleanAltDto | null;
}
