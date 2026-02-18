import { ApiCancellationDto } from '../../../swagger/models/api-cancellation-dto';
import { Cancellation } from '../../models/cancellation.interface';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';

export function adaptCancellationToUI(source?: ApiCancellationDto | null): Cancellation {
  return {
    cancellationReason: source?.CancellationReason ?? '',
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
    id: source?.Id ?? 0,
  };
}
