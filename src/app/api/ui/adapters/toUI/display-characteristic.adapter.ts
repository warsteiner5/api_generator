import { ApiDisplayCharacteristicDto } from '../../../swagger/models/api-display-characteristic-dto';
import { DisplayCharacteristic } from '../../models/display-characteristic.interface';
import { adaptCharacteristicSourceEnumToUI } from './characteristic-source-enum.adapter';

export function adaptDisplayCharacteristicToUI(source?: ApiDisplayCharacteristicDto | null): DisplayCharacteristic {
  return {
    characteristicSource: adaptCharacteristicSourceEnumToUI(source?.CharacteristicSource),
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    unitCode: source?.UnitCode ?? '',
    unitName: source?.UnitName ?? '',
    value: source?.Value ?? '',
    value2: source?.Value2 ?? '',
  };
}
