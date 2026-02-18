import { TruTypeEnum2 } from '../enums/tru-type-enum-2.enum';

export interface ExternalDealTradeProduct {
  lotItemId: number;
  name: string;
  okeiCode: string;
  okeiName: string;
  okpd2Code: string;
  okpd2Name: string;
  price: number;
  quantity: number;
  sum: number;
  type: TruTypeEnum2;
}
