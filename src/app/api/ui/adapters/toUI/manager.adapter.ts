import { ApiManagerDto } from '../../../swagger/models/api-manager-dto';
import { Manager } from '../../models/manager.interface';

export function adaptManagerToUI(source?: ApiManagerDto | null): Manager {
  return {
    firstName: source?.firstName ?? '',
    inn: source?.inn ?? '',
    lastName: source?.lastName ?? '',
    ogrn: source?.ogrn ?? '',
    patronymic: source?.patronymic ?? '',
    post: source?.post ?? '',
  };
}
