import { ContactInfo } from '../../models/contact-info.interface';
import { ApiContactInfoDto } from '../../../swagger/models/api-contact-info-dto';

export const apiContactInfoDtoAdapter = (source?: ContactInfo | null): ApiContactInfoDto => {
  return {
    ContactInfoEmail: source?.contactInfoEmail,
    ContactInfoFax: source?.contactInfoFax,
    ContactInfoFirstName: source?.contactInfoFirstName,
    ContactInfoLastName: source?.contactInfoLastName,
    ContactInfoMiddleName: source?.contactInfoMiddleName,
    ContactInfoPhone: source?.contactInfoPhone,
  };
}
