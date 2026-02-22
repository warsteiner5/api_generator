import { ApiCancellationDto } from '../../../swagger/models/api-cancellation-dto';
import { Cancellation } from '../../models/cancellation.interface';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';

export const cancellationAdapter = (source?: ApiCancellationDto | null): Cancellation => {
  return {
    cancellationReason: source?.CancellationReason,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    id: source?.Id,
  };
}
