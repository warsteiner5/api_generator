import { ManagerRegulationStateEnum } from '../../enums/manager-regulation-state.enum';
import { ApiManagerRegulationStateEnum } from '../../../swagger/models/api-manager-regulation-state-enum';

export const apiManagerRegulationStateEnumAdapter = (source?: ManagerRegulationStateEnum | null): ApiManagerRegulationStateEnum => {
  switch (source) {
    case ManagerRegulationStateEnum.Required:
      return ApiManagerRegulationStateEnum.Required;
    case ManagerRegulationStateEnum.NotRequired:
      return ApiManagerRegulationStateEnum.NotRequired;
    case ManagerRegulationStateEnum.Accepted:
      return ApiManagerRegulationStateEnum.Accepted;
    case ManagerRegulationStateEnum.Rejected:
      return ApiManagerRegulationStateEnum.Rejected;
    default:
      throw new Error(`Enum value is not defined: ManagerRegulationStateEnum=${String(source)}`);
  }
}
