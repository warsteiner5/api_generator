import { ApiManagerRegulationStateEnum } from '../../../swagger/models/api-manager-regulation-state-enum';
import { ManagerRegulationStateEnum } from '../../enums/manager-regulation-state.enum';

export function adaptManagerRegulationStateEnumToUI(source?: ApiManagerRegulationStateEnum | null): ManagerRegulationStateEnum {
  switch (source) {
    case ApiManagerRegulationStateEnum.Required:
      return ManagerRegulationStateEnum.Required;
    case ApiManagerRegulationStateEnum.NotRequired:
      return ManagerRegulationStateEnum.NotRequired;
    case ApiManagerRegulationStateEnum.Accepted:
      return ManagerRegulationStateEnum.Accepted;
    case ApiManagerRegulationStateEnum.Rejected:
      return ManagerRegulationStateEnum.Rejected;
    default:
      throw new Error(`Enum value is not defined: ApiManagerRegulationStateEnum=${String(source)}`);
  }
}
