import { DealTerminateModelAlt } from '../../models/deal-terminate-model-alt.interface';
import { ApiDealTerminateModelAltDto } from '../../../swagger/models/api-deal-terminate-model';

export function adaptApiDealTerminateModelAltDto(source?: DealTerminateModelAlt | null): ApiDealTerminateModelAltDto {
  return {
    Message: source?.message,
  };
}
