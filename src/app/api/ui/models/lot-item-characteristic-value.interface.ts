import { KtruCharacteristicValueFormatEnum } from '../enums/ktru-characteristic-value-format.enum';

// @ts-ignore
export interface LotItemCharacteristicValue {
  concreteValue: number;
  externalSId: string;
  isOutRange: boolean;
  ktruCharacteristicValueFormatType: KtruCharacteristicValueFormatEnum;
  maxMathNotation: string;
  maxValue: number;
  minMathNotation: string;
  minValue: number;
  okeiCode: string;
  okeiName: string;
  qualityDescription: string;
  sId: number;
}
