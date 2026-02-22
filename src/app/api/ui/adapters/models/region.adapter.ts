import { ApiRegionDto } from '../../../swagger/models/api-region-dto';
import { Region } from '../../models/region.interface';

export const regionAdapter = (source?: ApiRegionDto | null): Region => {
  return {
    id: source?.Id,
    name: source?.Name,
    numberByConstitution: source?.NumberByConstitution,
  };
}
