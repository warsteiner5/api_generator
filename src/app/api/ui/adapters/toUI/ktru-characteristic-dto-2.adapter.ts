import { ApiKtruCharacteristicDto2 } from '../../../swagger/models/api-ktru-characteristic-dto-2';
import { KtruCharacteristicDto2 } from '../../models/ktru-characteristic-dto-2.interface';
import { adaptKtruCharacteristicValueToUI } from './ktru-characteristic-value.adapter';

export function adaptKtruCharacteristicDto2ToUI(source?: ApiKtruCharacteristicDto2 | null): KtruCharacteristicDto2 {
  return {
    characteristicChoiceTypeId: source?.CharacteristicChoiceTypeId ?? 0,
    characteristicKindId: source?.CharacteristicKindId ?? 0,
    characteristicTypeId: source?.CharacteristicTypeId ?? 0,
    characteristicValues: (source?.CharacteristicValues ?? []).map((item) => adaptKtruCharacteristicValueToUI(item)),
    code: source?.Code ?? '',
    id: source?.Id ?? 0,
    isActual: source?.IsActual ?? false,
    isRequired: source?.IsRequired ?? false,
    name: source?.Name ?? '',
  };
}
