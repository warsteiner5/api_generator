import { ApiRegistryDto } from '../../../swagger/models/api-registry-dto';
import { Registry } from '../../models/registry.interface';

export function adaptRegistryToUI(source?: ApiRegistryDto | null): Registry {
  return {
    name: source?.Name ?? '',
    points: source?.Points ?? 0,
    registryNumber: source?.RegistryNumber ?? '',
  };
}
