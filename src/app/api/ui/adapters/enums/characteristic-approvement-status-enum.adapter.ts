import { ApiCharacteristicApprovementStatusEnum } from '../../../swagger/models/api-characteristic-approvement-status-enum';
import { CharacteristicApprovementStatusEnum } from '../../enums/characteristic-approvement-status.enum';

export const characteristicApprovementStatusEnumAdapter = (source?: ApiCharacteristicApprovementStatusEnum | null): CharacteristicApprovementStatusEnum => {
  switch (source) {
    case ApiCharacteristicApprovementStatusEnum.Undefined:
      return CharacteristicApprovementStatusEnum.Undefined;
    case ApiCharacteristicApprovementStatusEnum.FromCustomer:
      return CharacteristicApprovementStatusEnum.FromCustomer;
    case ApiCharacteristicApprovementStatusEnum.NotReviewedByCustomer:
      return CharacteristicApprovementStatusEnum.NotReviewedByCustomer;
    case ApiCharacteristicApprovementStatusEnum.ApprovedByCustomer:
      return CharacteristicApprovementStatusEnum.ApprovedByCustomer;
    case ApiCharacteristicApprovementStatusEnum.RejectedByCustomer:
      return CharacteristicApprovementStatusEnum.RejectedByCustomer;
    default:
      throw new Error(`Enum value is not defined: ApiCharacteristicApprovementStatusEnum=${String(source)}`);
  }
}
