import { ApiFilterApplicationStateAltEnum } from '../../../swagger/models/api-filter-application-state';
import { FilterApplicationStateAltEnum } from '../../enums/filter-application-state-alt.enum';

export const filterApplicationStateAltEnumAdapter = (source?: ApiFilterApplicationStateAltEnum | null): FilterApplicationStateAltEnum => {
  switch (source) {
    case ApiFilterApplicationStateAltEnum.Formation:
      return FilterApplicationStateAltEnum.Formation;
    case ApiFilterApplicationStateAltEnum.Complete:
      return FilterApplicationStateAltEnum.Complete;
    case ApiFilterApplicationStateAltEnum.Rejected:
      return FilterApplicationStateAltEnum.Rejected;
    case ApiFilterApplicationStateAltEnum.Approved:
      return FilterApplicationStateAltEnum.Approved;
    case ApiFilterApplicationStateAltEnum.Accepted:
      return FilterApplicationStateAltEnum.Accepted;
    case ApiFilterApplicationStateAltEnum.RejectedByPart1:
      return FilterApplicationStateAltEnum.RejectedByPart1;
    case ApiFilterApplicationStateAltEnum.AcceptedByPart1:
      return FilterApplicationStateAltEnum.AcceptedByPart1;
    case ApiFilterApplicationStateAltEnum.NotImplemented:
      return FilterApplicationStateAltEnum.NotImplemented;
    case ApiFilterApplicationStateAltEnum.NotConsideredPart2:
      return FilterApplicationStateAltEnum.NotConsideredPart2;
    case ApiFilterApplicationStateAltEnum.RejectedByPart2:
      return FilterApplicationStateAltEnum.RejectedByPart2;
    case ApiFilterApplicationStateAltEnum.AcceptedByPart2:
      return FilterApplicationStateAltEnum.AcceptedByPart2;
    case ApiFilterApplicationStateAltEnum.Loser:
      return FilterApplicationStateAltEnum.Loser;
    case ApiFilterApplicationStateAltEnum.Winner:
      return FilterApplicationStateAltEnum.Winner;
    case ApiFilterApplicationStateAltEnum.ContractTerminated:
      return FilterApplicationStateAltEnum.ContractTerminated;
    case ApiFilterApplicationStateAltEnum.Withdrawn:
      return FilterApplicationStateAltEnum.Withdrawn;
    case ApiFilterApplicationStateAltEnum.RejectedTab:
      return FilterApplicationStateAltEnum.RejectedTab;
    case ApiFilterApplicationStateAltEnum.NotActual:
      return FilterApplicationStateAltEnum.NotActual;
    case ApiFilterApplicationStateAltEnum.WaitingForFinalProposal:
      return FilterApplicationStateAltEnum.WaitingForFinalProposal;
    case ApiFilterApplicationStateAltEnum.FinalProposalSubmitted:
      return FilterApplicationStateAltEnum.FinalProposalSubmitted;
    default:
      throw new Error(`Enum value is not defined: ApiFilterApplicationStateAltEnum=${String(source)}`);
  }
}
