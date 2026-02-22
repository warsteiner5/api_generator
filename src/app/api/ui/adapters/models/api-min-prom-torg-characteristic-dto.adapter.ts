import { MinPromTorgCharacteristic } from '../../models/min-prom-torg-characteristic.interface';
import { ApiMinPromTorgCharacteristicDto } from '../../../swagger/models/api-min-prom-torg-characteristic-dto';

export const apiMinPromTorgCharacteristicDtoAdapter = (source?: MinPromTorgCharacteristic | null): ApiMinPromTorgCharacteristicDto => {
  return {
    MeasureUnitCode: source?.measureUnitCode,
    MeasureUnitName: source?.measureUnitName,
    Name: source?.name,
    Value: source?.value,
  };
}
