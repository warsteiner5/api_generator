import { ApiCreateOrUpdateAutoUpdateRequestAltDto } from '../../../swagger/models/api-create-or-update-auto-update-request';
import { CreateOrUpdateAutoUpdateRequestAlt } from '../../models/create-or-update-auto-update-request-alt.interface';

export const createOrUpdateAutoUpdateRequestAltAdapter = (source?: ApiCreateOrUpdateAutoUpdateRequestAltDto | null): CreateOrUpdateAutoUpdateRequestAlt => {
  return {
    cronExpr: source?.CronExpr,
    expirationDateTime: source?.ExpirationDateTime,
    isImmediateUploadNecessary: source?.IsImmediateUploadNecessary,
    priceListId: source?.PriceListId,
    url: source?.Url,
  };
}
