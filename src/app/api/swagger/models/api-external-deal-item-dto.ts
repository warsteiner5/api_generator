/* tslint:disable */
/* eslint-disable */
import { ApiTruTypeEnum } from '../models/api-tru-type-enum';
export interface ApiExternalDealItemDto {
  Id?: number | null;
  LotItemId?: number | null;
  Name?: string | null;
  OkeiCode?: string | null;
  OkeiName?: string | null;
  Okpd2Code?: string | null;
  Okpd2Name?: string | null;
  Price?: number | null;
  Quantity?: number | null;
  ShortOkeiName?: string | null;
  Sum?: number | null;
  TruType?: ApiTruTypeEnum | null;
}
