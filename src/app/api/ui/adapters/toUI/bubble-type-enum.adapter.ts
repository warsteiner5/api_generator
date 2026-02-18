import { ApiBubbleTypeEnum } from '../../../swagger/models/api-bubble-type-enum';
import { BubbleTypeEnum } from '../../enums/bubble-type.enum';

export function adaptBubbleTypeEnumToUI(source?: ApiBubbleTypeEnum | null): BubbleTypeEnum {
  switch (source) {
    case ApiBubbleTypeEnum.Undefined:
      return BubbleTypeEnum.Undefined;
    case ApiBubbleTypeEnum.ParticipantWaitingComissionBlocking:
      return BubbleTypeEnum.ParticipantWaitingComissionBlocking;
    case ApiBubbleTypeEnum.CustomerWaitingParticipantConfirmation:
      return BubbleTypeEnum.CustomerWaitingParticipantConfirmation;
    case ApiBubbleTypeEnum.ParticipantNeedConfirmation:
      return BubbleTypeEnum.ParticipantNeedConfirmation;
    case ApiBubbleTypeEnum.ParticipantFinalProposalTimeout:
      return BubbleTypeEnum.ParticipantFinalProposalTimeout;
    default:
      throw new Error(`Enum value is not defined: ApiBubbleTypeEnum=${String(source)}`);
  }
}
