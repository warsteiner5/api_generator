import { CompetitiveListItemStateEnum } from '../../enums/competitive-list-item-state.enum';
import { ApiCompetitiveListItemStateEnum } from '../../../swagger/models/api-competitive-list-item-state-enum';

export const apiCompetitiveListItemStateEnumAdapter = (source?: CompetitiveListItemStateEnum | null): ApiCompetitiveListItemStateEnum => {
  switch (source) {
    case CompetitiveListItemStateEnum.New:
      return ApiCompetitiveListItemStateEnum.New;
    case CompetitiveListItemStateEnum.Approved:
      return ApiCompetitiveListItemStateEnum.Approved;
    case CompetitiveListItemStateEnum.Rejected:
      return ApiCompetitiveListItemStateEnum.Rejected;
    case CompetitiveListItemStateEnum.AutoApproved:
      return ApiCompetitiveListItemStateEnum.AutoApproved;
    default:
      throw new Error(`Enum value is not defined: CompetitiveListItemStateEnum=${String(source)}`);
  }
}
