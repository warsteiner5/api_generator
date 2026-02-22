import { LotItemCharacteristic } from './lot-item-characteristic.interface';
import { Okpd2CodeDto2 } from './okpd-2-code-dto-2.interface';
import { TruTypeEnum2 } from '../enums/tru-type-enum-2.enum';

// @ts-ignore
export interface LotItem {
  countryConfirmation: string;
  description: string;
  id: number;
  ktruCode: string;
  ktruName: string;
  ktruVersionNumber: number;
  lotItemCharacteristics: LotItemCharacteristic[];
  manufacturerCountryCode: string;
  name: string;
  okeiCode: string;
  okeiName: string;
  okpd2Codes: Okpd2CodeDto2[];
  okved2Code: string;
  okved2Name: string;
  orderNumber: number;
  quantity: number;
  quantityUndefined: boolean;
  sum: number;
  tradeId: number;
  tradeLotId: number;
  type: TruTypeEnum2;
  uniqueId: string;
  unitPrice: number;
}
