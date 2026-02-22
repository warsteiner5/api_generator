import { AdditionalService } from '../../models/additional-service.interface';
import { ApiAdditionalServiceDto } from '../../../swagger/models/api-additional-service-dto';

export const apiAdditionalServiceDtoAdapter = (source?: AdditionalService | null): ApiAdditionalServiceDto => {
  return {
    Id: source?.id,
    Name: source?.name,
    Price: source?.price,
  };
}
