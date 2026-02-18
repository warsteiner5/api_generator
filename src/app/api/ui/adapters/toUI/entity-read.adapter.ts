import { ApiEntityReadDto } from '../../../swagger/models/api-entity-read-dto';
import { EntityRead } from '../../models/entity-read.interface';

export function adaptEntityReadToUI(source?: ApiEntityReadDto | null): EntityRead {
  return {
    id: source?.Id ?? 0,
    isRead: source?.IsRead ?? false,
  };
}
