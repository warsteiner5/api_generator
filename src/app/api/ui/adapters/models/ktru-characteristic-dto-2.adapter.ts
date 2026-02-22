import { ApiKtruCharacteristicDto2 } from '../../../swagger/models/api-ktru-characteristic-dto-2';
import { KtruCharacteristicDto2 } from '../../models/ktru-characteristic-dto-2.interface';
import { ktruCharacteristicValueAdapter } from './ktru-characteristic-value.adapter';

export const ktruCharacteristicDto2Adapter = (source?: ApiKtruCharacteristicDto2 | null): KtruCharacteristicDto2 => {
  return {
    characteristicChoiceTypeId: source?.CharacteristicChoiceTypeId,
    characteristicKindId: source?.CharacteristicKindId,
    characteristicTypeId: source?.CharacteristicTypeId,
    characteristicValues: source?.CharacteristicValues?.map((item) => ktruCharacteristicValueAdapter(item)),
    code: source?.Code,
    id: source?.Id,
    isActual: source?.IsActual,
    isRequired: source?.IsRequired,
    name: source?.Name,
  };
}
