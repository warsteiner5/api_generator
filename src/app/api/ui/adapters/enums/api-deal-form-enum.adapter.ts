import { DealFormEnum } from '../../enums/deal-form.enum';
import { ApiDealFormEnum } from '../../../swagger/models/api-deal-form-enum';

export const apiDealFormEnumAdapter = (source?: DealFormEnum | null): ApiDealFormEnum => {
  switch (source) {
    case DealFormEnum.Electronic:
      return ApiDealFormEnum.Electronic;
    case DealFormEnum.Paper:
      return ApiDealFormEnum.Paper;
    default:
      throw new Error(`Enum value is not defined: DealFormEnum=${String(source)}`);
  }
}
