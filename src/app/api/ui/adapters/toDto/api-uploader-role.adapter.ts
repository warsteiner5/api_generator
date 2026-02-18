import { UploaderRoleAltEnum } from '../../enums/uploader-role-alt.enum';
import { ApiUploaderRoleAltEnum } from '../../../swagger/models/api-uploader-role';

export function adaptApiUploaderRoleAltEnum(source?: UploaderRoleAltEnum | null): ApiUploaderRoleAltEnum {
  switch (source) {
    case UploaderRoleAltEnum.Unknown:
      return ApiUploaderRoleAltEnum.Unknown;
    case UploaderRoleAltEnum.Organization:
      return ApiUploaderRoleAltEnum.Organization;
    case UploaderRoleAltEnum.Manager:
      return ApiUploaderRoleAltEnum.Manager;
    default:
      throw new Error(`Enum value is not defined: UploaderRoleAltEnum=${String(source)}`);
  }
}
