import { RegionKladr } from '../../models/region-kladr.interface';
import { ApiRegionKladrDto } from '../../../swagger/models/api-region-kladr-dto';

export const apiRegionKladrDtoAdapter = (source?: RegionKladr | null): ApiRegionKladrDto => {
  return {
    Code: source?.code,
    Index: source?.index,
    Name: source?.name,
    Ocato: source?.ocato,
    ShortName: source?.shortName,
  };
}
