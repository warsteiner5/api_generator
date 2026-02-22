import { ApiEntityReadDto } from '../../../swagger/models/api-entity-read-dto';
import { EntityRead } from '../../models/entity-read.interface';

export const entityReadAdapter = (source?: ApiEntityReadDto | null): EntityRead => {
  return {
    id: source?.Id,
    isRead: source?.IsRead,
  };
}
