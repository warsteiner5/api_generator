import { DisplayCharacteristic } from '../../models/display-characteristic.interface';
import { ApiDisplayCharacteristicDto } from '../../../swagger/models/api-display-characteristic-dto';
import { apiCharacteristicSourceEnumAdapter } from '../enums/api-characteristic-source-enum.adapter';

export const apiDisplayCharacteristicDtoAdapter = (source?: DisplayCharacteristic | null): ApiDisplayCharacteristicDto => {
  return {
    CharacteristicSource: source?.characteristicSource === null ? undefined : apiCharacteristicSourceEnumAdapter(source?.characteristicSource),
    Id: source?.id,
    Name: source?.name,
    UnitCode: source?.unitCode,
    UnitName: source?.unitName,
    Value: source?.value,
    Value2: source?.value2,
  };
}
