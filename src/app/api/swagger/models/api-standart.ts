/* tslint:disable */
/* eslint-disable */
import { ApiStandardTypeAltEnum } from '../models/api-standard-type';
export interface ApiStandartAltDto {
  Code?: string | null;
  DateEnd?: string | null;
  DateInto?: string | null;
  FullCode?: string | null;
  Id?: number;
  IsActual?: boolean;
  Name?: string | null;
  Parts?: Array<string> | null;
  RawCodes?: Array<string> | null;
  RawParts?: Array<string> | null;
  StandartType?: ApiStandardTypeAltEnum;
  Status?: string | null;
  Type?: string | null;
}
