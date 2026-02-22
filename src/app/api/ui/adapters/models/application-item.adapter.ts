import { ApiApplicationItemDto } from '../../../swagger/models/api-application-item-dto';
import { ApplicationItem } from '../../models/application-item.interface';
import { applicationDocumentAdapter } from './application-document.adapter';

export const applicationItemAdapter = (source?: ApiApplicationItemDto | null): ApplicationItem => {
  return {
    countryConfirmation: source?.CountryConfirmation,
    documents: source?.Documents?.map((item) => applicationDocumentAdapter(item)),
    lotItemApplicationId: source?.LotItemApplicationId,
    lotItemId: source?.LotItemId,
    lotItemOrder: source?.LotItemOrder,
    manufacturerCountryCode: source?.ManufacturerCountryCode,
    participantOfferId: source?.ParticipantOfferId,
    price: source?.Price,
    sumVat: source?.SumVat,
    taxPercent: source?.TaxPercent,
  };
}
