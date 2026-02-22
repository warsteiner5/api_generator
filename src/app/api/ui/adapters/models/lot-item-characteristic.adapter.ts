import { ApiLotItemCharacteristicDto } from '../../../swagger/models/api-lot-item-characteristic-dto';
import { LotItemCharacteristic } from '../../models/lot-item-characteristic.interface';
import { ktruCharacteristicKindTypeEnumAdapter } from '../enums/ktru-characteristic-kind-type-enum.adapter';
import { ktruCharacteristicTypeEnumAdapter } from '../enums/ktru-characteristic-type-enum.adapter';
import { lotItemCharacteristicValueAdapter } from './lot-item-characteristic-value.adapter';

export const lotItemCharacteristicAdapter = (source?: ApiLotItemCharacteristicDto | null): LotItemCharacteristic => {
  return {
    code: source?.Code,
    externalSId: source?.ExternalSId,
    ktruCharacteristicKindType: source?.KtruCharacteristicKindType === null ? undefined : ktruCharacteristicKindTypeEnumAdapter(source?.KtruCharacteristicKindType),
    lotItemCharacteristicValues: source?.LotItemCharacteristicValues?.map((item) => lotItemCharacteristicValueAdapter(item)),
    name: source?.Name,
    okeiName: source?.OkeiName,
    sId: source?.SId,
    type: source?.Type === null ? undefined : ktruCharacteristicTypeEnumAdapter(source?.Type),
  };
}
