import { KtruCharacteristicKindTypeEnum } from '../enums/ktru-characteristic-kind-type.enum';
import { KtruCharacteristicTypeEnum } from '../enums/ktru-characteristic-type.enum';
import { LotItemCharacteristicValue } from './lot-item-characteristic-value.interface';

// @ts-ignore
export interface LotItemCharacteristic {
  code: string;
  externalSId: string;
  ktruCharacteristicKindType: KtruCharacteristicKindTypeEnum;
  lotItemCharacteristicValues: LotItemCharacteristicValue[];
  name: string;
  okeiName: string;
  sId: number;
  type: KtruCharacteristicTypeEnum;
}
