import { ApiBubbleDto } from '../../../swagger/models/api-bubble-dto';
import { Bubble } from '../../models/bubble.interface';
import { bubbleTypeEnumAdapter } from '../enums/bubble-type-enum.adapter';

export const bubbleAdapter = (source?: ApiBubbleDto | null): Bubble => {
  return {
    confirmationDate: source?.ConfirmationDate,
    type: source?.Type === null ? undefined : bubbleTypeEnumAdapter(source?.Type),
  };
}
