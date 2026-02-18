import { BubbleTypeEnum } from '../../enums/bubble-type.enum';
import { ApiBubbleTypeEnum } from '../../../swagger/models/api-bubble-type-enum';

export function adaptApiBubbleTypeEnum(source?: BubbleTypeEnum | null): ApiBubbleTypeEnum {
  switch (source) {
    case BubbleTypeEnum.Undefined:
      return ApiBubbleTypeEnum.Undefined;
    case BubbleTypeEnum.ParticipantWaitingComissionBlocking:
      return ApiBubbleTypeEnum.ParticipantWaitingComissionBlocking;
    case BubbleTypeEnum.CustomerWaitingParticipantConfirmation:
      return ApiBubbleTypeEnum.CustomerWaitingParticipantConfirmation;
    case BubbleTypeEnum.ParticipantNeedConfirmation:
      return ApiBubbleTypeEnum.ParticipantNeedConfirmation;
    case BubbleTypeEnum.ParticipantFinalProposalTimeout:
      return ApiBubbleTypeEnum.ParticipantFinalProposalTimeout;
    default:
      throw new Error(`Enum value is not defined: BubbleTypeEnum=${String(source)}`);
  }
}
