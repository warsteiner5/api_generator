import { ApplicationStateEnum2 } from '../../enums/application-state-enum-2.enum';
import { ApiApplicationStateEnum2 } from '../../../swagger/models/api-application-state-enum-2';

export const apiApplicationStateEnum2Adapter = (source?: ApplicationStateEnum2 | null): ApiApplicationStateEnum2 => {
  switch (source) {
    case ApplicationStateEnum2.Formation:
      return ApiApplicationStateEnum2.Formation;
    case ApplicationStateEnum2.Complete:
      return ApiApplicationStateEnum2.Complete;
    case ApplicationStateEnum2.Rejected:
      return ApiApplicationStateEnum2.Rejected;
    case ApplicationStateEnum2.Approved:
      return ApiApplicationStateEnum2.Approved;
    case ApplicationStateEnum2.Accepted:
      return ApiApplicationStateEnum2.Accepted;
    case ApplicationStateEnum2.RejectedByPart1:
      return ApiApplicationStateEnum2.RejectedByPart1;
    case ApplicationStateEnum2.AcceptedByPart1:
      return ApiApplicationStateEnum2.AcceptedByPart1;
    case ApplicationStateEnum2.NotImplemented:
      return ApiApplicationStateEnum2.NotImplemented;
    case ApplicationStateEnum2.NotConsideredPart2:
      return ApiApplicationStateEnum2.NotConsideredPart2;
    case ApplicationStateEnum2.RejectedByPart2:
      return ApiApplicationStateEnum2.RejectedByPart2;
    case ApplicationStateEnum2.AcceptedByPart2:
      return ApiApplicationStateEnum2.AcceptedByPart2;
    case ApplicationStateEnum2.Loser:
      return ApiApplicationStateEnum2.Loser;
    case ApplicationStateEnum2.Winner:
      return ApiApplicationStateEnum2.Winner;
    case ApplicationStateEnum2.ContractTerminated:
      return ApiApplicationStateEnum2.ContractTerminated;
    case ApplicationStateEnum2.Withdrawn:
      return ApiApplicationStateEnum2.Withdrawn;
    case ApplicationStateEnum2.NotActual:
      return ApiApplicationStateEnum2.NotActual;
    case ApplicationStateEnum2.WaitingForFinalProposal:
      return ApiApplicationStateEnum2.WaitingForFinalProposal;
    case ApplicationStateEnum2.FinalProposalSubmitted:
      return ApiApplicationStateEnum2.FinalProposalSubmitted;
    default:
      throw new Error(`Enum value is not defined: ApplicationStateEnum2=${String(source)}`);
  }
}
