import { ApiDealTerminateModelAltDto } from '../../../swagger/models/api-deal-terminate-model';
import { DealTerminateModelAlt } from '../../models/deal-terminate-model-alt.interface';

export function adaptDealTerminateModelAltToUI(source?: ApiDealTerminateModelAltDto | null): DealTerminateModelAlt {
  return {
    message: source?.Message ?? '',
  };
}
