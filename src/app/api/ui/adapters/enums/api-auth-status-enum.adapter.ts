import { AuthStatusEnum } from '../../enums/auth-status.enum';
import { ApiAuthStatusEnum } from '../../../swagger/models/api-auth-status-enum';

export const apiAuthStatusEnumAdapter = (source?: AuthStatusEnum | null): ApiAuthStatusEnum => {
  switch (source) {
    case AuthStatusEnum.Ok:
      return ApiAuthStatusEnum.Ok;
    case AuthStatusEnum.Error:
      return ApiAuthStatusEnum.Error;
    case AuthStatusEnum.Redirect:
      return ApiAuthStatusEnum.Redirect;
    case AuthStatusEnum.SpecifyOrganization:
      return ApiAuthStatusEnum.SpecifyOrganization;
    case AuthStatusEnum.PasswordExpired:
      return ApiAuthStatusEnum.PasswordExpired;
    default:
      throw new Error(`Enum value is not defined: AuthStatusEnum=${String(source)}`);
  }
}
