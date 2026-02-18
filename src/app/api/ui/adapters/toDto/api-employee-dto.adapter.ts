import { Employee } from '../../models/employee.interface';
import { ApiEmployeeDto } from '../../../swagger/models/api-employee-dto';
import { adaptApiCertificateDto } from './api-certificate-dto.adapter';
import { adaptApiEmployeeDocumentDto } from './api-employee-document-dto.adapter';
import { adaptApiEmployeeWorkGroupDto } from './api-employee-work-group-dto.adapter';
import { adaptApiFileDto } from './api-file-dto.adapter';
import { adaptApiMessageDeliveryTypeAltEnum } from './api-message-delivery-type.adapter';

export function adaptApiEmployeeDto(source?: Employee | null): ApiEmployeeDto {
  return {
    AdsNotificationsAgreement: adaptApiFileDto(source?.adsNotificationsAgreement),
    Certificates: (source?.certificates ?? []).map((item) => adaptApiCertificateDto(item)),
    CustomerDeliveryType: adaptApiMessageDeliveryTypeAltEnum(source?.customerDeliveryType),
    CustomerEmail: source?.customerEmail,
    Documents: (source?.documents ?? []).map((item) => adaptApiEmployeeDocumentDto(item)),
    FirstName: source?.firstName,
    Id: source?.id,
    IsActive: source?.isActive,
    LastName: source?.lastName,
    Login: source?.login,
    MiddleName: source?.middleName,
    OrganizationId: source?.organizationId,
    OrganizationName: source?.organizationName,
    PersonalDataProcessingAgreement: adaptApiFileDto(source?.personalDataProcessingAgreement),
    PhoneNumber: source?.phoneNumber,
    Position: source?.position,
    SupplierDeliveryType: adaptApiMessageDeliveryTypeAltEnum(source?.supplierDeliveryType),
    SupplierEmail: source?.supplierEmail,
    UseOneContactEmailForCustomerAndSupplier: source?.useOneContactEmailForCustomerAndSupplier,
    UserId: source?.userId,
    WorkGroups: (source?.workGroups ?? []).map((item) => adaptApiEmployeeWorkGroupDto(item)),
  };
}
