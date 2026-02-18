import { ApiOrgSettingDto } from '../../../swagger/models/api-org-setting-dto';
import { OrgSetting } from '../../models/org-setting.interface';

export function adaptOrgSettingToUI(source?: ApiOrgSettingDto | null): OrgSetting {
  return (source ?? {}) as OrgSetting;
}
