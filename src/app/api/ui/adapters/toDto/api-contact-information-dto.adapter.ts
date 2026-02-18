import { ContactInformation } from '../../models/contact-information.interface';
import { ApiContactInformationDto } from '../../../swagger/models/api-contact-information-dto';

export function adaptApiContactInformationDto(source?: ContactInformation | null): ApiContactInformationDto {
  return {
    Email: source?.email,
    Fio: source?.fio,
    Phone: source?.phone,
    PhoneTail: source?.phoneTail,
  };
}
