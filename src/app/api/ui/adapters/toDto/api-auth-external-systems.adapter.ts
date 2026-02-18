import { AuthExternalSystemsAltEnum } from '../../enums/auth-external-systems-alt.enum';
import { ApiAuthExternalSystemsAltEnum } from '../../../swagger/models/api-auth-external-systems';

export function adaptApiAuthExternalSystemsAltEnum(source?: AuthExternalSystemsAltEnum | null): ApiAuthExternalSystemsAltEnum {
  switch (source) {
    case AuthExternalSystemsAltEnum.RtsPassport:
      return ApiAuthExternalSystemsAltEnum.RtsPassport;
    case AuthExternalSystemsAltEnum.Mo:
      return ApiAuthExternalSystemsAltEnum.Mo;
    case AuthExternalSystemsAltEnum.SalesTech:
      return ApiAuthExternalSystemsAltEnum.SalesTech;
    case AuthExternalSystemsAltEnum.Krista:
      return ApiAuthExternalSystemsAltEnum.Krista;
    case AuthExternalSystemsAltEnum.ExportBy:
      return ApiAuthExternalSystemsAltEnum.ExportBy;
    case AuthExternalSystemsAltEnum.Eat:
      return ApiAuthExternalSystemsAltEnum.Eat;
    default:
      throw new Error(`Enum value is not defined: AuthExternalSystemsAltEnum=${String(source)}`);
  }
}
