import { ApiRegionKladrDto } from '../../../swagger/models/api-region-kladr-dto';
import { RegionKladr } from '../../models/region-kladr.interface';

export const regionKladrAdapter = (source?: ApiRegionKladrDto | null): RegionKladr => {
  return {
    code: source?.Code,
    index: source?.Index,
    name: source?.Name,
    ocato: source?.Ocato,
    shortName: source?.ShortName,
  };
}
