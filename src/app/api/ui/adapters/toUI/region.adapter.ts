import { ApiRegionDto } from '../../../swagger/models/api-region-dto';
import { Region } from '../../models/region.interface';

export function adaptRegionToUI(source?: ApiRegionDto | null): Region {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    numberByConstitution: source?.NumberByConstitution ?? '',
  };
}
