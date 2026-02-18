import { ApiBubbleDto } from '../../../swagger/models/api-bubble-dto';
import { Bubble } from '../../models/bubble.interface';
import { adaptBubbleTypeEnumToUI } from './bubble-type-enum.adapter';

export function adaptBubbleToUI(source?: ApiBubbleDto | null): Bubble {
  return {
    confirmationDate: source?.ConfirmationDate ?? '',
    type: adaptBubbleTypeEnumToUI(source?.Type),
  };
}
