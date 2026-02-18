import { RegionalProductSignAvailabilityAltEnum } from '../enums/regional-product-sign-availability-alt.enum';

export interface TenantRegionalProductSignSetting {
  availabilityType: RegionalProductSignAvailabilityAltEnum;
  canEdit: boolean;
  fileGuid: string;
  tenantId: number;
  text: string;
  title: string;
}
