import { ApiContactInformationDto } from '../../../swagger/models/api-contact-information-dto';
import { ContactInformation } from '../../models/contact-information.interface';

export function adaptContactInformationToUI(source?: ApiContactInformationDto | null): ContactInformation {
  return {
    email: source?.Email ?? '',
    fio: source?.Fio ?? '',
    phone: source?.Phone ?? '',
    phoneTail: source?.PhoneTail ?? '',
  };
}
