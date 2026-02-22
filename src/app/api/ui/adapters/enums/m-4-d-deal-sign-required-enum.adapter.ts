import { ApiM4DDealSignRequiredEnum } from '../../../swagger/models/api-m-4-d-deal-sign-required-enum';
import { M4DDealSignRequiredEnum } from '../../enums/m-4-d-deal-sign-required.enum';

export const m4DDealSignRequiredEnumAdapter = (source?: ApiM4DDealSignRequiredEnum | null): M4DDealSignRequiredEnum => {
  switch (source) {
    case ApiM4DDealSignRequiredEnum.None:
      return M4DDealSignRequiredEnum.None;
    case ApiM4DDealSignRequiredEnum.AllServices:
      return M4DDealSignRequiredEnum.AllServices;
    case ApiM4DDealSignRequiredEnum.RTSEISOnly:
      return M4DDealSignRequiredEnum.RTSEISOnly;
    default:
      throw new Error(`Enum value is not defined: ApiM4DDealSignRequiredEnum=${String(source)}`);
  }
}
