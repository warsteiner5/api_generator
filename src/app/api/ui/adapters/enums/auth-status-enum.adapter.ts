import { ApiAuthStatusEnum } from '../../../swagger/models/api-auth-status-enum';
import { AuthStatusEnum } from '../../enums/auth-status.enum';

export const authStatusEnumAdapter = (source?: ApiAuthStatusEnum | null): AuthStatusEnum => {
  switch (source) {
    case ApiAuthStatusEnum.Ok:
      return AuthStatusEnum.Ok;
    case ApiAuthStatusEnum.Error:
      return AuthStatusEnum.Error;
    case ApiAuthStatusEnum.Redirect:
      return AuthStatusEnum.Redirect;
    case ApiAuthStatusEnum.SpecifyOrganization:
      return AuthStatusEnum.SpecifyOrganization;
    case ApiAuthStatusEnum.PasswordExpired:
      return AuthStatusEnum.PasswordExpired;
    default:
      throw new Error(`Enum value is not defined: ApiAuthStatusEnum=${String(source)}`);
  }
}
