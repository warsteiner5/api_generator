import { FilterApplicationStateAltEnum } from '../../enums/filter-application-state-alt.enum';
import { ApiFilterApplicationStateAltEnum } from '../../../swagger/models/api-filter-application-state';

export function adaptApiFilterApplicationStateAltEnum(source?: FilterApplicationStateAltEnum | null): ApiFilterApplicationStateAltEnum {
  switch (source) {
    case FilterApplicationStateAltEnum.Formation:
      return ApiFilterApplicationStateAltEnum.Formation;
    case FilterApplicationStateAltEnum.Complete:
      return ApiFilterApplicationStateAltEnum.Complete;
    case FilterApplicationStateAltEnum.Rejected:
      return ApiFilterApplicationStateAltEnum.Rejected;
    case FilterApplicationStateAltEnum.Approved:
      return ApiFilterApplicationStateAltEnum.Approved;
    case FilterApplicationStateAltEnum.Accepted:
      return ApiFilterApplicationStateAltEnum.Accepted;
    case FilterApplicationStateAltEnum.RejectedByPart1:
      return ApiFilterApplicationStateAltEnum.RejectedByPart1;
    case FilterApplicationStateAltEnum.AcceptedByPart1:
      return ApiFilterApplicationStateAltEnum.AcceptedByPart1;
    case FilterApplicationStateAltEnum.NotImplemented:
      return ApiFilterApplicationStateAltEnum.NotImplemented;
    case FilterApplicationStateAltEnum.NotConsideredPart2:
      return ApiFilterApplicationStateAltEnum.NotConsideredPart2;
    case FilterApplicationStateAltEnum.RejectedByPart2:
      return ApiFilterApplicationStateAltEnum.RejectedByPart2;
    case FilterApplicationStateAltEnum.AcceptedByPart2:
      return ApiFilterApplicationStateAltEnum.AcceptedByPart2;
    case FilterApplicationStateAltEnum.Loser:
      return ApiFilterApplicationStateAltEnum.Loser;
    case FilterApplicationStateAltEnum.Winner:
      return ApiFilterApplicationStateAltEnum.Winner;
    case FilterApplicationStateAltEnum.ContractTerminated:
      return ApiFilterApplicationStateAltEnum.ContractTerminated;
    case FilterApplicationStateAltEnum.Withdrawn:
      return ApiFilterApplicationStateAltEnum.Withdrawn;
    case FilterApplicationStateAltEnum.RejectedTab:
      return ApiFilterApplicationStateAltEnum.RejectedTab;
    case FilterApplicationStateAltEnum.NotActual:
      return ApiFilterApplicationStateAltEnum.NotActual;
    case FilterApplicationStateAltEnum.WaitingForFinalProposal:
      return ApiFilterApplicationStateAltEnum.WaitingForFinalProposal;
    case FilterApplicationStateAltEnum.FinalProposalSubmitted:
      return ApiFilterApplicationStateAltEnum.FinalProposalSubmitted;
    default:
      throw new Error(`Enum value is not defined: FilterApplicationStateAltEnum=${String(source)}`);
  }
}
