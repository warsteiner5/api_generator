import { ApiTenantRegionalProductSignSettingDto } from '../../../swagger/models/api-tenant-regional-product-sign-setting-dto';
import { TenantRegionalProductSignSetting } from '../../models/tenant-regional-product-sign-setting.interface';
import { adaptRegionalProductSignAvailabilityAltEnumToUI } from './regional-product-sign-availability-alt-enum.adapter';

export function adaptTenantRegionalProductSignSettingToUI(source?: ApiTenantRegionalProductSignSettingDto | null): TenantRegionalProductSignSetting {
  return {
    availabilityType: adaptRegionalProductSignAvailabilityAltEnumToUI(source?.AvailabilityType),
    canEdit: source?.CanEdit ?? false,
    fileGuid: source?.FileGuid ?? '',
    tenantId: source?.TenantId ?? 0,
    text: source?.Text ?? '',
    title: source?.Title ?? '',
  };
}
