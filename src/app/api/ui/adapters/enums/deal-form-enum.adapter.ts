import { ApiDealFormEnum } from '../../../swagger/models/api-deal-form-enum';
import { DealFormEnum } from '../../enums/deal-form.enum';

export const dealFormEnumAdapter = (source?: ApiDealFormEnum | null): DealFormEnum => {
  switch (source) {
    case ApiDealFormEnum.Electronic:
      return DealFormEnum.Electronic;
    case ApiDealFormEnum.Paper:
      return DealFormEnum.Paper;
    default:
      throw new Error(`Enum value is not defined: ApiDealFormEnum=${String(source)}`);
  }
}
