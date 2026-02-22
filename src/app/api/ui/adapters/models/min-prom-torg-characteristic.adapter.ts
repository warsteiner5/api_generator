import { ApiMinPromTorgCharacteristicDto } from '../../../swagger/models/api-min-prom-torg-characteristic-dto';
import { MinPromTorgCharacteristic } from '../../models/min-prom-torg-characteristic.interface';

export const minPromTorgCharacteristicAdapter = (source?: ApiMinPromTorgCharacteristicDto | null): MinPromTorgCharacteristic => {
  return {
    measureUnitCode: source?.MeasureUnitCode,
    measureUnitName: source?.MeasureUnitName,
    name: source?.Name,
    value: source?.Value,
  };
}
