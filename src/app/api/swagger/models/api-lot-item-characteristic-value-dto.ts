/* tslint:disable */
/* eslint-disable */
import { ApiKtruCharacteristicValueFormatEnum } from '../models/api-ktru-characteristic-value-format-enum';
export interface ApiLotItemCharacteristicValueDto {
  ConcreteValue?: number | null;
  ExternalSId?: string | null;
  IsOutRange?: boolean | null;
  KtruCharacteristicValueFormatType?: ApiKtruCharacteristicValueFormatEnum | null;
  MaxMathNotation?: string | null;
  MaxValue?: number | null;
  MinMathNotation?: string | null;
  MinValue?: number | null;
  OkeiCode?: string | null;
  OkeiName?: string | null;
  QualityDescription?: string | null;
  SId?: number | null;
}
