import { ApiTenantRegionalProductSignSettingDto } from '../../../swagger/models/api-tenant-regional-product-sign-setting-dto';
import { TenantRegionalProductSignSetting } from '../../models/tenant-regional-product-sign-setting.interface';
import { regionalProductSignAvailabilityAltEnumAdapter } from '../enums/regional-product-sign-availability-alt-enum.adapter';

export const tenantRegionalProductSignSettingAdapter = (source?: ApiTenantRegionalProductSignSettingDto | null): TenantRegionalProductSignSetting => {
  return {
    availabilityType: source?.AvailabilityType === null ? undefined : regionalProductSignAvailabilityAltEnumAdapter(source?.AvailabilityType),
    canEdit: source?.CanEdit,
    fileGuid: source?.FileGuid,
    tenantId: source?.TenantId,
    text: source?.Text,
    title: source?.Title,
  };
}
