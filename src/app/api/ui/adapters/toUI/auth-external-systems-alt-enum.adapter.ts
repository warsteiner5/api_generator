import { ApiAuthExternalSystemsAltEnum } from '../../../swagger/models/api-auth-external-systems';
import { AuthExternalSystemsAltEnum } from '../../enums/auth-external-systems-alt.enum';

export function adaptAuthExternalSystemsAltEnumToUI(source?: ApiAuthExternalSystemsAltEnum | null): AuthExternalSystemsAltEnum {
  switch (source) {
    case ApiAuthExternalSystemsAltEnum.RtsPassport:
      return AuthExternalSystemsAltEnum.RtsPassport;
    case ApiAuthExternalSystemsAltEnum.Mo:
      return AuthExternalSystemsAltEnum.Mo;
    case ApiAuthExternalSystemsAltEnum.SalesTech:
      return AuthExternalSystemsAltEnum.SalesTech;
    case ApiAuthExternalSystemsAltEnum.Krista:
      return AuthExternalSystemsAltEnum.Krista;
    case ApiAuthExternalSystemsAltEnum.ExportBy:
      return AuthExternalSystemsAltEnum.ExportBy;
    case ApiAuthExternalSystemsAltEnum.Eat:
      return AuthExternalSystemsAltEnum.Eat;
    default:
      throw new Error(`Enum value is not defined: ApiAuthExternalSystemsAltEnum=${String(source)}`);
  }
}
