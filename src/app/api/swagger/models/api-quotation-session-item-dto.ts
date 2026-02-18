/* tslint:disable */
/* eslint-disable */
import { ApiKtruCharacteristicDto } from '../models/api-ktru-characteristic-dto';
import { ApiTruTypeEnum2 } from '../models/api-tru-type-enum-2';
export interface ApiQuotationSessionItemDto {
  Description?: string | null;
  Id?: number;
  KtruCharacteristics?: Array<ApiKtruCharacteristicDto> | null;
  KtruCode?: string | null;
  KtruName?: string | null;
  Name?: string | null;
  Okpd2Code?: string | null;
  Okpd2Name?: string | null;
  PositionNumber?: number;
  Price?: number | null;
  ProductType?: ApiTruTypeEnum2 | null;
  Quantity?: number | null;
  ShortOkeiName?: string | null;
  Sum?: number | null;
}
