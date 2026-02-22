import { Certificate } from './certificate.interface';
import { EmployeeDocument } from './employee-document.interface';
import { EmployeeWorkGroup } from './employee-work-group.interface';
import { File } from './file.interface';
import { MessageDeliveryTypeAltEnum } from '../enums/message-delivery-type-alt.enum';

// @ts-ignore
export interface Employee {
  adsNotificationsAgreement: File;
  certificates: Certificate[];
  customerDeliveryType: MessageDeliveryTypeAltEnum;
  customerEmail: string;
  documents: EmployeeDocument[];
  firstName: string;
  id: number;
  isActive: boolean;
  lastName: string;
  login: string;
  middleName: string;
  organizationId: number;
  organizationName: string;
  personalDataProcessingAgreement: File;
  phoneNumber: string;
  position: string;
  supplierDeliveryType: MessageDeliveryTypeAltEnum;
  supplierEmail: string;
  useOneContactEmailForCustomerAndSupplier: boolean;
  userId: number;
  workGroups: EmployeeWorkGroup[];
}
