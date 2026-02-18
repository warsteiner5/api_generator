import { ApiCreateOrUpdateAutoUpdateRequestAltDto } from '../../../swagger/models/api-create-or-update-auto-update-request';
import { CreateOrUpdateAutoUpdateRequestAlt } from '../../models/create-or-update-auto-update-request-alt.interface';

export function adaptCreateOrUpdateAutoUpdateRequestAltToUI(source?: ApiCreateOrUpdateAutoUpdateRequestAltDto | null): CreateOrUpdateAutoUpdateRequestAlt {
  return {
    cronExpr: source?.CronExpr ?? '',
    expirationDateTime: source?.ExpirationDateTime ?? '',
    isImmediateUploadNecessary: source?.IsImmediateUploadNecessary ?? false,
    priceListId: source?.PriceListId ?? 0,
    url: source?.Url ?? '',
  };
}
