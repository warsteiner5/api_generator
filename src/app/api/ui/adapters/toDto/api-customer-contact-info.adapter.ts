import { CustomerContactInfoAlt } from '../../models/customer-contact-info-alt.interface';
import { ApiCustomerContactInfoAltDto } from '../../../swagger/models/api-customer-contact-info';

export function adaptApiCustomerContactInfoAltDto(source?: CustomerContactInfoAlt | null): ApiCustomerContactInfoAltDto {
  return {
    ContactEmail: source?.contactEmail,
    ContactPhone: source?.contactPhone,
    Fio: source?.fio,
  };
}
