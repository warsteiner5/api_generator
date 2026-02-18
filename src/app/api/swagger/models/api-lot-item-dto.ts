/* tslint:disable */
/* eslint-disable */
import { ApiLotItemCharacteristicDto } from '../models/api-lot-item-characteristic-dto';
import { ApiOkpd2CodeDto2 } from '../models/api-okpd-2-code-dto-2';
import { ApiTruTypeEnum2 } from '../models/api-tru-type-enum-2';
export interface ApiLotItemDto {
  CountryConfirmation?: string | null;
  Description?: string | null;
  Id?: number;
  KtruCode?: string | null;
  KtruName?: string | null;
  KtruVersionNumber?: number | null;
  LotItemCharacteristics?: Array<ApiLotItemCharacteristicDto> | null;
  ManufacturerCountryCode?: string | null;
  Name?: string | null;
  OkeiCode?: string | null;
  OkeiName?: string | null;
  Okpd2Codes?: Array<ApiOkpd2CodeDto2> | null;
  Okved2Code?: string | null;
  Okved2Name?: string | null;
  OrderNumber?: number | null;
  Quantity?: number | null;
  QuantityUndefined?: boolean;
  Sum?: number | null;
  TradeId?: number | null;
  TradeLotId?: number | null;
  Type?: ApiTruTypeEnum2 | null;
  UniqueId?: string | null;
  UnitPrice?: number | null;
}
