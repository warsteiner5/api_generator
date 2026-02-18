import { LotItemCharacteristic } from '../../models/lot-item-characteristic.interface';
import { ApiLotItemCharacteristicDto } from '../../../swagger/models/api-lot-item-characteristic-dto';
import { adaptApiKtruCharacteristicKindTypeEnum } from './api-ktru-characteristic-kind-type-enum.adapter';
import { adaptApiKtruCharacteristicTypeEnum } from './api-ktru-characteristic-type-enum.adapter';
import { adaptApiLotItemCharacteristicValueDto } from './api-lot-item-characteristic-value-dto.adapter';

export function adaptApiLotItemCharacteristicDto(source?: LotItemCharacteristic | null): ApiLotItemCharacteristicDto {
  return {
    Code: source?.code,
    ExternalSId: source?.externalSId,
    KtruCharacteristicKindType: adaptApiKtruCharacteristicKindTypeEnum(source?.ktruCharacteristicKindType),
    LotItemCharacteristicValues: (source?.lotItemCharacteristicValues ?? []).map((item) => adaptApiLotItemCharacteristicValueDto(item)),
    Name: source?.name,
    OkeiName: source?.okeiName,
    SId: source?.sId,
    Type: adaptApiKtruCharacteristicTypeEnum(source?.type),
  };
}
