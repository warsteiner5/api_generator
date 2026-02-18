import { ExternalSystemToSendCart } from './external-system-to-send-cart.interface';
import { OrgAccreditationLevel } from './org-accreditation-level.interface';
import { OrganizationTypeEnum } from '../enums/organization-type.enum';

export interface MarketProfileOrganizationInfo {
  externalSystemsToSendCart: ExternalSystemToSendCart[];
  guid: string;
  id: number;
  inn: string;
  isHomeRegionInfoMessageShow: boolean;
  isSendCartToExternalSystemsEnabled: boolean;
  isSmsp: boolean;
  isTestOrganization: boolean;
  kpp: string;
  name: string;
  orgAccreditationLevel: OrgAccreditationLevel;
  organizationType: OrganizationTypeEnum;
  shortName: string;
  unp: string;
  userId: number;
}
