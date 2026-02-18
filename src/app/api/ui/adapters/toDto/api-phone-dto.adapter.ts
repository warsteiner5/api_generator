import { Phone } from '../../models/phone.interface';
import { ApiPhoneDto } from '../../../swagger/models/api-phone-dto';

export function adaptApiPhoneDto(source?: Phone | null): ApiPhoneDto {
  return {
    number: source?.number,
  };
}
