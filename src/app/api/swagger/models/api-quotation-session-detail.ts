/* tslint:disable */
/* eslint-disable */
import { ApiOkeiCodeMarketDto } from '../models/api-okei-code-market-dto';
import { ApiOkpd2CodeMarketDto } from '../models/api-okpd-2-code-market-dto';
import { ApiQuotationSessionKtruCharacteristicAltDto } from '../models/api-quotation-session-ktru-characteristic';
import { ApiTruTypeEnum } from '../models/api-tru-type-enum';
export interface ApiQuotationSessionDetailAltDto {
  ClassificatorCode?: string | null;
  ClassificatorDescription?: string | null;
  Description?: string | null;
  Id?: number;
  KtruCharacteristicValues?: Array<ApiQuotationSessionKtruCharacteristicAltDto> | null;
  KtruCode?: string | null;
  KtruName?: string | null;
  KtruVersionNumber?: number;
  Okei?: ApiOkeiCodeMarketDto | null;
  Okpd2Codes?: Array<ApiOkpd2CodeMarketDto> | null;
  ProductName?: string | null;
  Quantity?: number | null;
  Type?: ApiTruTypeEnum | null;
  UnitPrice?: number | null;
}
