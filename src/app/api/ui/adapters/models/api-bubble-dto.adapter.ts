import { Bubble } from '../../models/bubble.interface';
import { ApiBubbleDto } from '../../../swagger/models/api-bubble-dto';
import { apiBubbleTypeEnumAdapter } from '../enums/api-bubble-type-enum.adapter';

export const apiBubbleDtoAdapter = (source?: Bubble | null): ApiBubbleDto => {
  return {
    ConfirmationDate: source?.confirmationDate,
    Type: source?.type === null ? undefined : apiBubbleTypeEnumAdapter(source?.type),
  };
}
