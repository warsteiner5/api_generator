/* tslint:disable */
/* eslint-disable */
export interface ApiValidationResultAltDto {
  Errors?: ({
[key: string]: Array<string>;
}) | null;
  IsCritical?: boolean;
  IsFailed?: boolean;
  IsSucceed?: boolean;
}
