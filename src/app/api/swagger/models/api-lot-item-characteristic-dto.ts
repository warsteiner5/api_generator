/* tslint:disable */
/* eslint-disable */
import { ApiKtruCharacteristicKindTypeEnum } from '../models/api-ktru-characteristic-kind-type-enum';
import { ApiKtruCharacteristicTypeEnum } from '../models/api-ktru-characteristic-type-enum';
import { ApiLotItemCharacteristicValueDto } from '../models/api-lot-item-characteristic-value-dto';
export interface ApiLotItemCharacteristicDto {
  Code?: string | null;
  ExternalSId?: string | null;
  KtruCharacteristicKindType?: ApiKtruCharacteristicKindTypeEnum | null;
  LotItemCharacteristicValues?: Array<ApiLotItemCharacteristicValueDto> | null;
  Name?: string | null;
  OkeiName?: string | null;
  SId?: number | null;
  Type?: ApiKtruCharacteristicTypeEnum | null;
}
