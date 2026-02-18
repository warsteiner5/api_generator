import { ApiLotItemCharacteristicDto } from '../../../swagger/models/api-lot-item-characteristic-dto';
import { LotItemCharacteristic } from '../../models/lot-item-characteristic.interface';
import { adaptKtruCharacteristicKindTypeEnumToUI } from './ktru-characteristic-kind-type-enum.adapter';
import { adaptKtruCharacteristicTypeEnumToUI } from './ktru-characteristic-type-enum.adapter';
import { adaptLotItemCharacteristicValueToUI } from './lot-item-characteristic-value.adapter';

export function adaptLotItemCharacteristicToUI(source?: ApiLotItemCharacteristicDto | null): LotItemCharacteristic {
  return {
    code: source?.Code ?? '',
    externalSId: source?.ExternalSId ?? '',
    ktruCharacteristicKindType: adaptKtruCharacteristicKindTypeEnumToUI(source?.KtruCharacteristicKindType),
    lotItemCharacteristicValues: (source?.LotItemCharacteristicValues ?? []).map((item) => adaptLotItemCharacteristicValueToUI(item)),
    name: source?.Name ?? '',
    okeiName: source?.OkeiName ?? '',
    sId: source?.SId ?? 0,
    type: adaptKtruCharacteristicTypeEnumToUI(source?.Type),
  };
}
