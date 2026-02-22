import { Cancellation } from '../../models/cancellation.interface';
import { ApiCancellationDto } from '../../../swagger/models/api-cancellation-dto';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';

export const apiCancellationDtoAdapter = (source?: Cancellation | null): ApiCancellationDto => {
  return {
    CancellationReason: source?.cancellationReason,
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
    Id: source?.id,
  };
}
