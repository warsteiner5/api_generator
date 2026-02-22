import { ApiContactInfoDto } from '../../../swagger/models/api-contact-info-dto';
import { ContactInfo } from '../../models/contact-info.interface';

export const contactInfoAdapter = (source?: ApiContactInfoDto | null): ContactInfo => {
  return {
    contactInfoEmail: source?.ContactInfoEmail,
    contactInfoFax: source?.ContactInfoFax,
    contactInfoFirstName: source?.ContactInfoFirstName,
    contactInfoLastName: source?.ContactInfoLastName,
    contactInfoMiddleName: source?.ContactInfoMiddleName,
    contactInfoPhone: source?.ContactInfoPhone,
  };
}
