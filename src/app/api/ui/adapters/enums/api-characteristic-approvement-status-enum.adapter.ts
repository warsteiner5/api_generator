import { CharacteristicApprovementStatusEnum } from '../../enums/characteristic-approvement-status.enum';
import { ApiCharacteristicApprovementStatusEnum } from '../../../swagger/models/api-characteristic-approvement-status-enum';

export const apiCharacteristicApprovementStatusEnumAdapter = (source?: CharacteristicApprovementStatusEnum | null): ApiCharacteristicApprovementStatusEnum => {
  switch (source) {
    case CharacteristicApprovementStatusEnum.Undefined:
      return ApiCharacteristicApprovementStatusEnum.Undefined;
    case CharacteristicApprovementStatusEnum.FromCustomer:
      return ApiCharacteristicApprovementStatusEnum.FromCustomer;
    case CharacteristicApprovementStatusEnum.NotReviewedByCustomer:
      return ApiCharacteristicApprovementStatusEnum.NotReviewedByCustomer;
    case CharacteristicApprovementStatusEnum.ApprovedByCustomer:
      return ApiCharacteristicApprovementStatusEnum.ApprovedByCustomer;
    case CharacteristicApprovementStatusEnum.RejectedByCustomer:
      return ApiCharacteristicApprovementStatusEnum.RejectedByCustomer;
    default:
      throw new Error(`Enum value is not defined: CharacteristicApprovementStatusEnum=${String(source)}`);
  }
}
