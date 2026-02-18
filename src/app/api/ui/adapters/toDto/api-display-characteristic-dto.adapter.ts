import { DisplayCharacteristic } from '../../models/display-characteristic.interface';
import { ApiDisplayCharacteristicDto } from '../../../swagger/models/api-display-characteristic-dto';
import { adaptApiCharacteristicSourceEnum } from './api-characteristic-source-enum.adapter';

export function adaptApiDisplayCharacteristicDto(source?: DisplayCharacteristic | null): ApiDisplayCharacteristicDto {
  return {
    CharacteristicSource: adaptApiCharacteristicSourceEnum(source?.characteristicSource),
    Id: source?.id,
    Name: source?.name,
    UnitCode: source?.unitCode,
    UnitName: source?.unitName,
    Value: source?.value,
    Value2: source?.value2,
  };
}
