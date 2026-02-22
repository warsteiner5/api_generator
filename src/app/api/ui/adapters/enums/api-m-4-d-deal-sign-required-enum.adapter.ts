import { M4DDealSignRequiredEnum } from '../../enums/m-4-d-deal-sign-required.enum';
import { ApiM4DDealSignRequiredEnum } from '../../../swagger/models/api-m-4-d-deal-sign-required-enum';

export const apiM4DDealSignRequiredEnumAdapter = (source?: M4DDealSignRequiredEnum | null): ApiM4DDealSignRequiredEnum => {
  switch (source) {
    case M4DDealSignRequiredEnum.None:
      return ApiM4DDealSignRequiredEnum.None;
    case M4DDealSignRequiredEnum.AllServices:
      return ApiM4DDealSignRequiredEnum.AllServices;
    case M4DDealSignRequiredEnum.RTSEISOnly:
      return ApiM4DDealSignRequiredEnum.RTSEISOnly;
    default:
      throw new Error(`Enum value is not defined: M4DDealSignRequiredEnum=${String(source)}`);
  }
}
