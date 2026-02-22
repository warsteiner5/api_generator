import { OrgSetting } from '../../models/org-setting.interface';
import { ApiOrgSettingDto } from '../../../swagger/models/api-org-setting-dto';

export const apiOrgSettingDtoAdapter = (source?: OrgSetting | null): ApiOrgSettingDto => {
  return (source ?? {}) as ApiOrgSettingDto;
}
