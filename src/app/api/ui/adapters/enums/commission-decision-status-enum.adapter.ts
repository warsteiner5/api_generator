import { ApiCommissionDecisionStatusEnum } from '../../../swagger/models/api-commission-decision-status-enum';
import { CommissionDecisionStatusEnum } from '../../enums/commission-decision-status.enum';

export const commissionDecisionStatusEnumAdapter = (source?: ApiCommissionDecisionStatusEnum | null): CommissionDecisionStatusEnum => {
  switch (source) {
    case ApiCommissionDecisionStatusEnum.Considering:
      return CommissionDecisionStatusEnum.Considering;
    case ApiCommissionDecisionStatusEnum.Approved:
      return CommissionDecisionStatusEnum.Approved;
    case ApiCommissionDecisionStatusEnum.Rejected:
      return CommissionDecisionStatusEnum.Rejected;
    default:
      throw new Error(`Enum value is not defined: ApiCommissionDecisionStatusEnum=${String(source)}`);
  }
}
