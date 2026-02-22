import { Registry } from '../../models/registry.interface';
import { ApiRegistryDto } from '../../../swagger/models/api-registry-dto';

export const apiRegistryDtoAdapter = (source?: Registry | null): ApiRegistryDto => {
  return {
    Name: source?.name,
    Points: source?.points,
    RegistryNumber: source?.registryNumber,
  };
}
