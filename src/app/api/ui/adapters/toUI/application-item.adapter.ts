import { ApiApplicationItemDto } from '../../../swagger/models/api-application-item-dto';
import { ApplicationItem } from '../../models/application-item.interface';
import { adaptApplicationDocumentToUI } from './application-document.adapter';

export function adaptApplicationItemToUI(source?: ApiApplicationItemDto | null): ApplicationItem {
  return {
    countryConfirmation: source?.CountryConfirmation ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptApplicationDocumentToUI(item)),
    lotItemApplicationId: source?.LotItemApplicationId ?? 0,
    lotItemId: source?.LotItemId ?? 0,
    lotItemOrder: source?.LotItemOrder ?? 0,
    manufacturerCountryCode: source?.ManufacturerCountryCode ?? '',
    participantOfferId: source?.ParticipantOfferId ?? 0,
    price: source?.Price ?? 0,
    sumVat: source?.SumVat ?? 0,
    taxPercent: source?.TaxPercent ?? 0,
  };
}
