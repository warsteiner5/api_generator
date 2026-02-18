/* tslint:disable */
/* eslint-disable */
import { ApiCertificateDto } from '../models/api-certificate-dto';
import { ApiEmployeeDocumentDto } from '../models/api-employee-document-dto';
import { ApiEmployeeWorkGroupDto } from '../models/api-employee-work-group-dto';
import { ApiFileDto } from '../models/api-file-dto';
import { ApiMessageDeliveryTypeAltEnum } from '../models/api-message-delivery-type';
export interface ApiEmployeeDto {
  AdsNotificationsAgreement?: ApiFileDto | null;
  Certificates?: Array<ApiCertificateDto> | null;
  CustomerDeliveryType?: ApiMessageDeliveryTypeAltEnum | null;
  CustomerEmail?: string | null;
  Documents?: Array<ApiEmployeeDocumentDto> | null;
  FirstName?: string | null;
  Id?: number;
  IsActive?: boolean;
  LastName?: string | null;
  Login?: string | null;
  MiddleName?: string | null;
  OrganizationId?: number;
  OrganizationName?: string | null;
  PersonalDataProcessingAgreement?: ApiFileDto | null;
  PhoneNumber?: string | null;
  Position?: string | null;
  SupplierDeliveryType?: ApiMessageDeliveryTypeAltEnum | null;
  SupplierEmail?: string | null;
  UseOneContactEmailForCustomerAndSupplier?: boolean;
  UserId?: number;
  WorkGroups?: Array<ApiEmployeeWorkGroupDto> | null;
}
