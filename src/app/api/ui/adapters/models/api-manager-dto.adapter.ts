import { Manager } from '../../models/manager.interface';
import { ApiManagerDto } from '../../../swagger/models/api-manager-dto';

export const apiManagerDtoAdapter = (source?: Manager | null): ApiManagerDto => {
  return {
    firstName: source?.firstName,
    inn: source?.inn,
    lastName: source?.lastName,
    ogrn: source?.ogrn,
    patronymic: source?.patronymic,
    post: source?.post,
  };
}
