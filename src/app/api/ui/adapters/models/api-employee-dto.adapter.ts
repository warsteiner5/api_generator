import { Employee } from '../../models/employee.interface';
import { ApiEmployeeDto } from '../../../swagger/models/api-employee-dto';
import { apiCertificateDtoAdapter } from './api-certificate-dto.adapter';
import { apiEmployeeDocumentDtoAdapter } from './api-employee-document-dto.adapter';
import { apiEmployeeWorkGroupDtoAdapter } from './api-employee-work-group-dto.adapter';
import { apiFileDtoAdapter } from './api-file-dto.adapter';
import { apiMessageDeliveryTypeAltEnumAdapter } from '../enums/api-message-delivery-type.adapter';

export const apiEmployeeDtoAdapter = (source?: Employee | null): ApiEmployeeDto => {
  return {
    AdsNotificationsAgreement: source?.adsNotificationsAgreement === null ? undefined : apiFileDtoAdapter(source?.adsNotificationsAgreement),
    Certificates: source?.certificates?.map((item) => apiCertificateDtoAdapter(item)),
    CustomerDeliveryType: source?.customerDeliveryType === null ? undefined : apiMessageDeliveryTypeAltEnumAdapter(source?.customerDeliveryType),
    CustomerEmail: source?.customerEmail,
    Documents: source?.documents?.map((item) => apiEmployeeDocumentDtoAdapter(item)),
    FirstName: source?.firstName,
    Id: source?.id,
    IsActive: source?.isActive,
    LastName: source?.lastName,
    Login: source?.login,
    MiddleName: source?.middleName,
    OrganizationId: source?.organizationId,
    OrganizationName: source?.organizationName,
    PersonalDataProcessingAgreement: source?.personalDataProcessingAgreement === null ? undefined : apiFileDtoAdapter(source?.personalDataProcessingAgreement),
    PhoneNumber: source?.phoneNumber,
    Position: source?.position,
    SupplierDeliveryType: source?.supplierDeliveryType === null ? undefined : apiMessageDeliveryTypeAltEnumAdapter(source?.supplierDeliveryType),
    SupplierEmail: source?.supplierEmail,
    UseOneContactEmailForCustomerAndSupplier: source?.useOneContactEmailForCustomerAndSupplier,
    UserId: source?.userId,
    WorkGroups: source?.workGroups?.map((item) => apiEmployeeWorkGroupDtoAdapter(item)),
  };
}
