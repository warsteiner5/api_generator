import { ApiApplicationStateEnum2 } from '../../../swagger/models/api-application-state-enum-2';
import { ApplicationStateEnum2 } from '../../enums/application-state-enum-2.enum';

export const applicationStateEnum2Adapter = (source?: ApiApplicationStateEnum2 | null): ApplicationStateEnum2 => {
  switch (source) {
    case ApiApplicationStateEnum2.Formation:
      return ApplicationStateEnum2.Formation;
    case ApiApplicationStateEnum2.Complete:
      return ApplicationStateEnum2.Complete;
    case ApiApplicationStateEnum2.Rejected:
      return ApplicationStateEnum2.Rejected;
    case ApiApplicationStateEnum2.Approved:
      return ApplicationStateEnum2.Approved;
    case ApiApplicationStateEnum2.Accepted:
      return ApplicationStateEnum2.Accepted;
    case ApiApplicationStateEnum2.RejectedByPart1:
      return ApplicationStateEnum2.RejectedByPart1;
    case ApiApplicationStateEnum2.AcceptedByPart1:
      return ApplicationStateEnum2.AcceptedByPart1;
    case ApiApplicationStateEnum2.NotImplemented:
      return ApplicationStateEnum2.NotImplemented;
    case ApiApplicationStateEnum2.NotConsideredPart2:
      return ApplicationStateEnum2.NotConsideredPart2;
    case ApiApplicationStateEnum2.RejectedByPart2:
      return ApplicationStateEnum2.RejectedByPart2;
    case ApiApplicationStateEnum2.AcceptedByPart2:
      return ApplicationStateEnum2.AcceptedByPart2;
    case ApiApplicationStateEnum2.Loser:
      return ApplicationStateEnum2.Loser;
    case ApiApplicationStateEnum2.Winner:
      return ApplicationStateEnum2.Winner;
    case ApiApplicationStateEnum2.ContractTerminated:
      return ApplicationStateEnum2.ContractTerminated;
    case ApiApplicationStateEnum2.Withdrawn:
      return ApplicationStateEnum2.Withdrawn;
    case ApiApplicationStateEnum2.NotActual:
      return ApplicationStateEnum2.NotActual;
    case ApiApplicationStateEnum2.WaitingForFinalProposal:
      return ApplicationStateEnum2.WaitingForFinalProposal;
    case ApiApplicationStateEnum2.FinalProposalSubmitted:
      return ApplicationStateEnum2.FinalProposalSubmitted;
    default:
      throw new Error(`Enum value is not defined: ApiApplicationStateEnum2=${String(source)}`);
  }
}
