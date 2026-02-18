import { ApiExternalDealInfoItemForPublishAltDto } from '../../../swagger/models/api-external-deal-info-item-for-publish';
import { ExternalDealInfoItemForPublishAlt } from '../../models/external-deal-info-item-for-publish-alt.interface';

export function adaptExternalDealInfoItemForPublishAltToUI(source?: ApiExternalDealInfoItemForPublishAltDto | null): ExternalDealInfoItemForPublishAlt {
  return {
    name: source?.Name ?? '',
    okeiCode: source?.OkeiCode ?? '',
    okeiName: source?.OkeiName ?? '',
    okpd2Code: source?.Okpd2Code ?? '',
    okpd2Name: source?.Okpd2Name ?? '',
    quantity: source?.Quantity ?? 0,
  };
}
