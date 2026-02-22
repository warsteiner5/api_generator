import { ApiAdditionalServiceDto } from '../../../swagger/models/api-additional-service-dto';
import { AdditionalService } from '../../models/additional-service.interface';

export const additionalServiceAdapter = (source?: ApiAdditionalServiceDto | null): AdditionalService => {
  return {
    id: source?.Id,
    name: source?.Name,
    price: source?.Price,
  };
}
