import { CreateOrUpdateAutoUpdateRequestAlt } from '../../models/create-or-update-auto-update-request-alt.interface';
import { ApiCreateOrUpdateAutoUpdateRequestAltDto } from '../../../swagger/models/api-create-or-update-auto-update-request';

export const apiCreateOrUpdateAutoUpdateRequestAltDtoAdapter = (source?: CreateOrUpdateAutoUpdateRequestAlt | null): ApiCreateOrUpdateAutoUpdateRequestAltDto => {
  return {
    CronExpr: source?.cronExpr,
    ExpirationDateTime: source?.expirationDateTime,
    IsImmediateUploadNecessary: source?.isImmediateUploadNecessary,
    PriceListId: source?.priceListId,
    Url: source?.url,
  };
}
