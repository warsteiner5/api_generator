import { ExternalDealInfoItemForPublishAlt } from '../../models/external-deal-info-item-for-publish-alt.interface';
import { ApiExternalDealInfoItemForPublishAltDto } from '../../../swagger/models/api-external-deal-info-item-for-publish';

export function adaptApiExternalDealInfoItemForPublishAltDto(source?: ExternalDealInfoItemForPublishAlt | null): ApiExternalDealInfoItemForPublishAltDto {
  return {
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OkeiName: source?.okeiName,
    Okpd2Code: source?.okpd2Code,
    Okpd2Name: source?.okpd2Name,
    Quantity: source?.quantity,
  };
}
