import { CommissionDecisionStatusEnum } from '../../enums/commission-decision-status.enum';
import { ApiCommissionDecisionStatusEnum } from '../../../swagger/models/api-commission-decision-status-enum';

export function adaptApiCommissionDecisionStatusEnum(source?: CommissionDecisionStatusEnum | null): ApiCommissionDecisionStatusEnum {
  switch (source) {
    case CommissionDecisionStatusEnum.Considering:
      return ApiCommissionDecisionStatusEnum.Considering;
    case CommissionDecisionStatusEnum.Approved:
      return ApiCommissionDecisionStatusEnum.Approved;
    case CommissionDecisionStatusEnum.Rejected:
      return ApiCommissionDecisionStatusEnum.Rejected;
    default:
      throw new Error(`Enum value is not defined: CommissionDecisionStatusEnum=${String(source)}`);
  }
}
