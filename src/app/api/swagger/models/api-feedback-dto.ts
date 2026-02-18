/* tslint:disable */
/* eslint-disable */
import { ApiFeedBackOrganizationRoleEnum } from '../models/api-feed-back-organization-role-enum';
import { ApiHumanometrOptionsAltDto } from '../models/api-humanometr-options';
export interface ApiFeedbackDto {
  Content?: string | null;
  Email?: string | null;
  FIO?: string | null;
  FilesGuids?: Array<string> | null;
  HumanometrOptions?: ApiHumanometrOptionsAltDto | null;
  IsPersonalDataAgreement?: boolean;
  OrganizationInn?: string | null;
  OrganizationKpp?: string | null;
  OrganizationName?: string | null;
  OrganizationType?: ApiFeedBackOrganizationRoleEnum | null;
  PhoneNumber?: string | null;
  Subject?: string | null;
  TradeNumbers?: string | null;
}
