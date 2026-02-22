import { ApiPhoneDto } from '../../../swagger/models/api-phone-dto';
import { Phone } from '../../models/phone.interface';

export const phoneAdapter = (source?: ApiPhoneDto | null): Phone => {
  return {
    number: source?.number,
  };
}
