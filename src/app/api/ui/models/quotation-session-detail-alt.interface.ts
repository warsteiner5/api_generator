import { OkeiCodeMarket } from './okei-code-market.interface';
import { Okpd2CodeMarket } from './okpd-2-code-market.interface';
import { QuotationSessionKtruCharacteristicAlt } from './quotation-session-ktru-characteristic-alt.interface';
import { TruTypeEnum } from '../enums/tru-type.enum';

export interface QuotationSessionDetailAlt {
  classificatorCode: string;
  classificatorDescription: string;
  description: string;
  id: number;
  ktruCharacteristicValues: QuotationSessionKtruCharacteristicAlt[];
  ktruCode: string;
  ktruName: string;
  ktruVersionNumber: number;
  okei: OkeiCodeMarket;
  okpd2Codes: Okpd2CodeMarket[];
  productName: string;
  quantity: number;
  type: TruTypeEnum;
  unitPrice: number;
}
