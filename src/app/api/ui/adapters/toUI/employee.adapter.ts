import { ApiEmployeeDto } from '../../../swagger/models/api-employee-dto';
import { Employee } from '../../models/employee.interface';
import { adaptCertificateToUI } from './certificate.adapter';
import { adaptEmployeeDocumentToUI } from './employee-document.adapter';
import { adaptEmployeeWorkGroupToUI } from './employee-work-group.adapter';
import { adaptFileToUI } from './file.adapter';
import { adaptMessageDeliveryTypeAltEnumToUI } from './message-delivery-type-alt-enum.adapter';

export function adaptEmployeeToUI(source?: ApiEmployeeDto | null): Employee {
  return {
    adsNotificationsAgreement: adaptFileToUI(source?.AdsNotificationsAgreement),
    certificates: (source?.Certificates ?? []).map((item) => adaptCertificateToUI(item)),
    customerDeliveryType: adaptMessageDeliveryTypeAltEnumToUI(source?.CustomerDeliveryType),
    customerEmail: source?.CustomerEmail ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptEmployeeDocumentToUI(item)),
    firstName: source?.FirstName ?? '',
    id: source?.Id ?? 0,
    isActive: source?.IsActive ?? false,
    lastName: source?.LastName ?? '',
    login: source?.Login ?? '',
    middleName: source?.MiddleName ?? '',
    organizationId: source?.OrganizationId ?? 0,
    organizationName: source?.OrganizationName ?? '',
    personalDataProcessingAgreement: adaptFileToUI(source?.PersonalDataProcessingAgreement),
    phoneNumber: source?.PhoneNumber ?? '',
    position: source?.Position ?? '',
    supplierDeliveryType: adaptMessageDeliveryTypeAltEnumToUI(source?.SupplierDeliveryType),
    supplierEmail: source?.SupplierEmail ?? '',
    useOneContactEmailForCustomerAndSupplier: source?.UseOneContactEmailForCustomerAndSupplier ?? false,
    userId: source?.UserId ?? 0,
    workGroups: (source?.WorkGroups ?? []).map((item) => adaptEmployeeWorkGroupToUI(item)),
  };
}
