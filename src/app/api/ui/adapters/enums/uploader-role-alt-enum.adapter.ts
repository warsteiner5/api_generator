import { ApiUploaderRoleAltEnum } from '../../../swagger/models/api-uploader-role';
import { UploaderRoleAltEnum } from '../../enums/uploader-role-alt.enum';

export const uploaderRoleAltEnumAdapter = (source?: ApiUploaderRoleAltEnum | null): UploaderRoleAltEnum => {
  switch (source) {
    case ApiUploaderRoleAltEnum.Unknown:
      return UploaderRoleAltEnum.Unknown;
    case ApiUploaderRoleAltEnum.Organization:
      return UploaderRoleAltEnum.Organization;
    case ApiUploaderRoleAltEnum.Manager:
      return UploaderRoleAltEnum.Manager;
    default:
      throw new Error(`Enum value is not defined: ApiUploaderRoleAltEnum=${String(source)}`);
  }
}
