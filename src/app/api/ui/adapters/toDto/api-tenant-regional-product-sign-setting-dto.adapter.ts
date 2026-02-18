import { TenantRegionalProductSignSetting } from '../../models/tenant-regional-product-sign-setting.interface';
import { ApiTenantRegionalProductSignSettingDto } from '../../../swagger/models/api-tenant-regional-product-sign-setting-dto';
import { adaptApiRegionalProductSignAvailabilityAltEnum } from './api-regional-product-sign-availability.adapter';

export function adaptApiTenantRegionalProductSignSettingDto(source?: TenantRegionalProductSignSetting | null): ApiTenantRegionalProductSignSettingDto {
  return {
    AvailabilityType: adaptApiRegionalProductSignAvailabilityAltEnum(source?.availabilityType),
    CanEdit: source?.canEdit,
    FileGuid: source?.fileGuid,
    TenantId: source?.tenantId,
    Text: source?.text,
    Title: source?.title,
  };
}
