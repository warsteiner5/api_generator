import { ApiDealTerminateModelAltDto } from '../../../swagger/models/api-deal-terminate-model';
import { DealTerminateModelAlt } from '../../models/deal-terminate-model-alt.interface';

export const dealTerminateModelAltAdapter = (source?: ApiDealTerminateModelAltDto | null): DealTerminateModelAlt => {
  return {
    message: source?.Message,
  };
}
