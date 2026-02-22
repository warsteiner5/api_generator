import { ApiDisplayCharacteristicDto } from '../../../swagger/models/api-display-characteristic-dto';
import { DisplayCharacteristic } from '../../models/display-characteristic.interface';
import { characteristicSourceEnumAdapter } from '../enums/characteristic-source-enum.adapter';

export const displayCharacteristicAdapter = (source?: ApiDisplayCharacteristicDto | null): DisplayCharacteristic => {
  return {
    characteristicSource: source?.CharacteristicSource === null ? undefined : characteristicSourceEnumAdapter(source?.CharacteristicSource),
    id: source?.Id,
    name: source?.Name,
    unitCode: source?.UnitCode,
    unitName: source?.UnitName,
    value: source?.Value,
    value2: source?.Value2,
  };
}
