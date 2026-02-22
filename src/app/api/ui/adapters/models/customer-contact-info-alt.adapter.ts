import { ApiCustomerContactInfoAltDto } from '../../../swagger/models/api-customer-contact-info';
import { CustomerContactInfoAlt } from '../../models/customer-contact-info-alt.interface';

export const customerContactInfoAltAdapter = (source?: ApiCustomerContactInfoAltDto | null): CustomerContactInfoAlt => {
  return {
    contactEmail: source?.ContactEmail,
    contactPhone: source?.ContactPhone,
    fio: source?.Fio,
  };
}
