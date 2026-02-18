/* tslint:disable */
/* eslint-disable */
import { ApiStandartAltDto } from '../models/api-standart';
export interface ApiPurchaseObjectCardAltDto {
  AdditionalInfo?: string | null;
  HasNotActualStandart?: boolean;
  Id?: number;
  IsGrammarError?: boolean;
  IsMatch?: boolean;
  LotId?: number;
  NationalCode?: string | null;
  NotActualStandarts?: Array<string> | null;
  OKPDId?: string | null;
  Percent?: string | null;
  Price?: string | null;
  ProfitPrice?: number;
  QuantityValue?: string | null;
  RawAdditionalInfo?: string | null;
  RawQuantityValue?: number;
  RawTRUName?: string | null;
  SearchQuery?: string | null;
  SerializedProfitModel?: string | null;
  Standarts?: Array<ApiStandartAltDto> | null;
  Sum?: string | null;
  TRUName?: string | null;
}
