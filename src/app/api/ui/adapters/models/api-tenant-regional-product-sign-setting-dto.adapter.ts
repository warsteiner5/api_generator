import { TenantRegionalProductSignSetting } from '../../models/tenant-regional-product-sign-setting.interface';
import { ApiTenantRegionalProductSignSettingDto } from '../../../swagger/models/api-tenant-regional-product-sign-setting-dto';
import { apiRegionalProductSignAvailabilityAltEnumAdapter } from '../enums/api-regional-product-sign-availability.adapter';

export const apiTenantRegionalProductSignSettingDtoAdapter = (source?: TenantRegionalProductSignSetting | null): ApiTenantRegionalProductSignSettingDto => {
  return {
    AvailabilityType: source?.availabilityType === null ? undefined : apiRegionalProductSignAvailabilityAltEnumAdapter(source?.availabilityType),
    CanEdit: source?.canEdit,
    FileGuid: source?.fileGuid,
    TenantId: source?.tenantId,
    Text: source?.text,
    Title: source?.title,
  };
}
