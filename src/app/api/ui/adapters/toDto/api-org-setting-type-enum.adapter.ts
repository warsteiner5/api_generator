import { OrgSettingTypeEnum } from '../../enums/org-setting-type.enum';
import { ApiOrgSettingTypeEnum } from '../../../swagger/models/api-org-setting-type-enum';

export function adaptApiOrgSettingTypeEnum(source?: OrgSettingTypeEnum | null): ApiOrgSettingTypeEnum {
  switch (source) {
    case OrgSettingTypeEnum.None:
      return ApiOrgSettingTypeEnum.None;
    case OrgSettingTypeEnum.Decimal:
      return ApiOrgSettingTypeEnum.Decimal;
    case OrgSettingTypeEnum.Boolean:
      return ApiOrgSettingTypeEnum.Boolean;
    case OrgSettingTypeEnum.CustomerDirectionFlow:
      return ApiOrgSettingTypeEnum.CustomerDirectionFlow;
    case OrgSettingTypeEnum.Json:
      return ApiOrgSettingTypeEnum.Json;
    case OrgSettingTypeEnum.String:
      return ApiOrgSettingTypeEnum.String;
    case OrgSettingTypeEnum.DocumentTypeEnum:
      return ApiOrgSettingTypeEnum.DocumentTypeEnum;
    case OrgSettingTypeEnum.Int:
      return ApiOrgSettingTypeEnum.Int;
    case OrgSettingTypeEnum.TimeSpan:
      return ApiOrgSettingTypeEnum.TimeSpan;
    case OrgSettingTypeEnum.Guid:
      return ApiOrgSettingTypeEnum.Guid;
    case OrgSettingTypeEnum.SignatureStampFormatEnum:
      return ApiOrgSettingTypeEnum.SignatureStampFormatEnum;
    default:
      throw new Error(`Enum value is not defined: OrgSettingTypeEnum=${String(source)}`);
  }
}
