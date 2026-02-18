import { Registry } from '../../models/registry.interface';
import { ApiRegistryDto } from '../../../swagger/models/api-registry-dto';

export function adaptApiRegistryDto(source?: Registry | null): ApiRegistryDto {
  return {
    Name: source?.name,
    Points: source?.points,
    RegistryNumber: source?.registryNumber,
  };
}
