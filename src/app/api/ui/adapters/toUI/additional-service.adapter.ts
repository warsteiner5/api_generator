import { ApiAdditionalServiceDto } from '../../../swagger/models/api-additional-service-dto';
import { AdditionalService } from '../../models/additional-service.interface';

export function adaptAdditionalServiceToUI(source?: ApiAdditionalServiceDto | null): AdditionalService {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    price: source?.Price ?? 0,
  };
}
