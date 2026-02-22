import { Region } from '../../models/region.interface';
import { ApiRegionDto } from '../../../swagger/models/api-region-dto';

export const apiRegionDtoAdapter = (source?: Region | null): ApiRegionDto => {
  return {
    Id: source?.id,
    Name: source?.name,
    NumberByConstitution: source?.numberByConstitution,
  };
}
