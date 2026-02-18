/* tslint:disable */
/* eslint-disable */
import { ApiRegionalProductSignAvailabilityAltEnum } from '../models/api-regional-product-sign-availability';
export interface ApiTenantRegionalProductSignSettingDto {
  AvailabilityType?: ApiRegionalProductSignAvailabilityAltEnum | null;
  CanEdit?: boolean;
  FileGuid?: string | null;
  TenantId?: number;
  Text?: string | null;
  Title?: string | null;
}
