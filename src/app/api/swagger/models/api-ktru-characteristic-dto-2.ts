/* tslint:disable */
/* eslint-disable */
import { ApiKtruCharacteristicValueDto } from '../models/api-ktru-characteristic-value-dto';
export interface ApiKtruCharacteristicDto2 {
  CharacteristicChoiceTypeId?: number;
  CharacteristicKindId?: number | null;
  CharacteristicTypeId?: number;
  CharacteristicValues?: Array<ApiKtruCharacteristicValueDto> | null;
  Code?: string | null;
  Id?: number;
  IsActual?: boolean | null;
  IsRequired?: boolean | null;
  Name?: string | null;
}
