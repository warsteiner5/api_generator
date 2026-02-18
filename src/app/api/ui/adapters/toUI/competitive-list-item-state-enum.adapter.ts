import { ApiCompetitiveListItemStateEnum } from '../../../swagger/models/api-competitive-list-item-state-enum';
import { CompetitiveListItemStateEnum } from '../../enums/competitive-list-item-state.enum';

export function adaptCompetitiveListItemStateEnumToUI(source?: ApiCompetitiveListItemStateEnum | null): CompetitiveListItemStateEnum {
  switch (source) {
    case ApiCompetitiveListItemStateEnum.New:
      return CompetitiveListItemStateEnum.New;
    case ApiCompetitiveListItemStateEnum.Approved:
      return CompetitiveListItemStateEnum.Approved;
    case ApiCompetitiveListItemStateEnum.Rejected:
      return CompetitiveListItemStateEnum.Rejected;
    case ApiCompetitiveListItemStateEnum.AutoApproved:
      return CompetitiveListItemStateEnum.AutoApproved;
    default:
      throw new Error(`Enum value is not defined: ApiCompetitiveListItemStateEnum=${String(source)}`);
  }
}
