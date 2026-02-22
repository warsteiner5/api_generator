import { ApiOrgSettingTypeEnum } from '../../../swagger/models/api-org-setting-type-enum';
import { OrgSettingTypeEnum } from '../../enums/org-setting-type.enum';

export const orgSettingTypeEnumAdapter = (source?: ApiOrgSettingTypeEnum | null): OrgSettingTypeEnum => {
  switch (source) {
    case ApiOrgSettingTypeEnum.None:
      return OrgSettingTypeEnum.None;
    case ApiOrgSettingTypeEnum.Decimal:
      return OrgSettingTypeEnum.Decimal;
    case ApiOrgSettingTypeEnum.Boolean:
      return OrgSettingTypeEnum.Boolean;
    case ApiOrgSettingTypeEnum.CustomerDirectionFlow:
      return OrgSettingTypeEnum.CustomerDirectionFlow;
    case ApiOrgSettingTypeEnum.Json:
      return OrgSettingTypeEnum.Json;
    case ApiOrgSettingTypeEnum.String:
      return OrgSettingTypeEnum.String;
    case ApiOrgSettingTypeEnum.DocumentTypeEnum:
      return OrgSettingTypeEnum.DocumentTypeEnum;
    case ApiOrgSettingTypeEnum.Int:
      return OrgSettingTypeEnum.Int;
    case ApiOrgSettingTypeEnum.TimeSpan:
      return OrgSettingTypeEnum.TimeSpan;
    case ApiOrgSettingTypeEnum.Guid:
      return OrgSettingTypeEnum.Guid;
    case ApiOrgSettingTypeEnum.SignatureStampFormatEnum:
      return OrgSettingTypeEnum.SignatureStampFormatEnum;
    default:
      throw new Error(`Enum value is not defined: ApiOrgSettingTypeEnum=${String(source)}`);
  }
}
