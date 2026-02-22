import { EntityRead } from '../../models/entity-read.interface';
import { ApiEntityReadDto } from '../../../swagger/models/api-entity-read-dto';

export const apiEntityReadDtoAdapter = (source?: EntityRead | null): ApiEntityReadDto => {
  return {
    Id: source?.id,
    IsRead: source?.isRead,
  };
}
