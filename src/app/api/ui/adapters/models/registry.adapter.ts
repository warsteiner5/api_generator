import { ApiRegistryDto } from '../../../swagger/models/api-registry-dto';
import { Registry } from '../../models/registry.interface';

export const registryAdapter = (source?: ApiRegistryDto | null): Registry => {
  return {
    name: source?.Name,
    points: source?.Points,
    registryNumber: source?.RegistryNumber,
  };
}
