import { LotItemCharacteristic } from '../../models/lot-item-characteristic.interface';
import { ApiLotItemCharacteristicDto } from '../../../swagger/models/api-lot-item-characteristic-dto';
import { apiKtruCharacteristicKindTypeEnumAdapter } from '../enums/api-ktru-characteristic-kind-type-enum.adapter';
import { apiKtruCharacteristicTypeEnumAdapter } from '../enums/api-ktru-characteristic-type-enum.adapter';
import { apiLotItemCharacteristicValueDtoAdapter } from './api-lot-item-characteristic-value-dto.adapter';

export const apiLotItemCharacteristicDtoAdapter = (source?: LotItemCharacteristic | null): ApiLotItemCharacteristicDto => {
  return {
    Code: source?.code,
    ExternalSId: source?.externalSId,
    KtruCharacteristicKindType: source?.ktruCharacteristicKindType === null ? undefined : apiKtruCharacteristicKindTypeEnumAdapter(source?.ktruCharacteristicKindType),
    LotItemCharacteristicValues: source?.lotItemCharacteristicValues?.map((item) => apiLotItemCharacteristicValueDtoAdapter(item)),
    Name: source?.name,
    OkeiName: source?.okeiName,
    SId: source?.sId,
    Type: source?.type === null ? undefined : apiKtruCharacteristicTypeEnumAdapter(source?.type),
  };
}
