import { RegionalProductSignAvailabilityAltEnum } from '../enums/regional-product-sign-availability-alt.enum';

// @ts-ignore
export interface TenantRegionalProductSignSetting {
  availabilityType: RegionalProductSignAvailabilityAltEnum;
  canEdit: boolean;
  fileGuid: string;
  tenantId: number;
  text: string;
  title: string;
}
