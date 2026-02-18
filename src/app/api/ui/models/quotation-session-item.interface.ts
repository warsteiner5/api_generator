import { KtruCharacteristic } from './ktru-characteristic.interface';
import { TruTypeEnum2 } from '../enums/tru-type-enum-2.enum';

export interface QuotationSessionItem {
  description: string;
  id: number;
  ktruCharacteristics: KtruCharacteristic[];
  ktruCode: string;
  ktruName: string;
  name: string;
  okpd2Code: string;
  okpd2Name: string;
  positionNumber: number;
  price: number;
  productType: TruTypeEnum2;
  quantity: number;
  shortOkeiName: string;
  sum: number;
}
