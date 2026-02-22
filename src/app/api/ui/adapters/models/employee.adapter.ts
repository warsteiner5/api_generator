import { ApiEmployeeDto } from '../../../swagger/models/api-employee-dto';
import { Employee } from '../../models/employee.interface';
import { certificateAdapter } from './certificate.adapter';
import { employeeDocumentAdapter } from './employee-document.adapter';
import { employeeWorkGroupAdapter } from './employee-work-group.adapter';
import { fileAdapter } from './file.adapter';
import { messageDeliveryTypeAltEnumAdapter } from '../enums/message-delivery-type-alt-enum.adapter';

export const employeeAdapter = (source?: ApiEmployeeDto | null): Employee => {
  return {
    adsNotificationsAgreement: source?.AdsNotificationsAgreement === null ? undefined : fileAdapter(source?.AdsNotificationsAgreement),
    certificates: source?.Certificates?.map((item) => certificateAdapter(item)),
    customerDeliveryType: source?.CustomerDeliveryType === null ? undefined : messageDeliveryTypeAltEnumAdapter(source?.CustomerDeliveryType),
    customerEmail: source?.CustomerEmail,
    documents: source?.Documents?.map((item) => employeeDocumentAdapter(item)),
    firstName: source?.FirstName,
    id: source?.Id,
    isActive: source?.IsActive,
    lastName: source?.LastName,
    login: source?.Login,
    middleName: source?.MiddleName,
    organizationId: source?.OrganizationId,
    organizationName: source?.OrganizationName,
    personalDataProcessingAgreement: source?.PersonalDataProcessingAgreement === null ? undefined : fileAdapter(source?.PersonalDataProcessingAgreement),
    phoneNumber: source?.PhoneNumber,
    position: source?.Position,
    supplierDeliveryType: source?.SupplierDeliveryType === null ? undefined : messageDeliveryTypeAltEnumAdapter(source?.SupplierDeliveryType),
    supplierEmail: source?.SupplierEmail,
    useOneContactEmailForCustomerAndSupplier: source?.UseOneContactEmailForCustomerAndSupplier,
    userId: source?.UserId,
    workGroups: source?.WorkGroups?.map((item) => employeeWorkGroupAdapter(item)),
  };
}
