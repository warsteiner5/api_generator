import { Cancellation } from '../../models/cancellation.interface';
import { ApiCancellationDto } from '../../../swagger/models/api-cancellation-dto';
import { adaptApiDealObjectEnum } from './api-deal-object-enum.adapter';

export function adaptApiCancellationDto(source?: Cancellation | null): ApiCancellationDto {
  return {
    CancellationReason: source?.cancellationReason,
    DealObject: adaptApiDealObjectEnum(source?.dealObject),
    Id: source?.id,
  };
}
