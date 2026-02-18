import { Bubble } from '../../models/bubble.interface';
import { ApiBubbleDto } from '../../../swagger/models/api-bubble-dto';
import { adaptApiBubbleTypeEnum } from './api-bubble-type-enum.adapter';

export function adaptApiBubbleDto(source?: Bubble | null): ApiBubbleDto {
  return {
    ConfirmationDate: source?.confirmationDate,
    Type: adaptApiBubbleTypeEnum(source?.type),
  };
}
