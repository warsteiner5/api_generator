import { KtruCharacteristicDto2 } from '../../models/ktru-characteristic-dto-2.interface';
import { ApiKtruCharacteristicDto2 } from '../../../swagger/models/api-ktru-characteristic-dto-2';
import { apiKtruCharacteristicValueDtoAdapter } from './api-ktru-characteristic-value-dto.adapter';

export const apiKtruCharacteristicDto2Adapter = (source?: KtruCharacteristicDto2 | null): ApiKtruCharacteristicDto2 => {
  return {
    CharacteristicChoiceTypeId: source?.characteristicChoiceTypeId,
    CharacteristicKindId: source?.characteristicKindId,
    CharacteristicTypeId: source?.characteristicTypeId,
    CharacteristicValues: source?.characteristicValues?.map((item) => apiKtruCharacteristicValueDtoAdapter(item)),
    Code: source?.code,
    Id: source?.id,
    IsActual: source?.isActual,
    IsRequired: source?.isRequired,
    Name: source?.name,
  };
}
