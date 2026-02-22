import { Phone } from '../../models/phone.interface';
import { ApiPhoneDto } from '../../../swagger/models/api-phone-dto';

export const apiPhoneDtoAdapter = (source?: Phone | null): ApiPhoneDto => {
  return {
    number: source?.number,
  };
}
