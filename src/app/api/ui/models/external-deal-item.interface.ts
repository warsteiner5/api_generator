import { TruTypeEnum } from '../enums/tru-type.enum';

// @ts-ignore
export interface ExternalDealItem {
  id: number;
  lotItemId: number;
  name: string;
  okeiCode: string;
  okeiName: string;
  okpd2Code: string;
  okpd2Name: string;
  price: number;
  quantity: number;
  shortOkeiName: string;
  sum: number;
  truType: TruTypeEnum;
}
