import { ApplicationItem } from '../../models/application-item.interface';
import { ApiApplicationItemDto } from '../../../swagger/models/api-application-item-dto';
import { apiApplicationDocumentDtoAdapter } from './api-application-document-dto.adapter';

export const apiApplicationItemDtoAdapter = (source?: ApplicationItem | null): ApiApplicationItemDto => {
  return {
    CountryConfirmation: source?.countryConfirmation,
    Documents: source?.documents?.map((item) => apiApplicationDocumentDtoAdapter(item)),
    LotItemApplicationId: source?.lotItemApplicationId,
    LotItemId: source?.lotItemId,
    LotItemOrder: source?.lotItemOrder,
    ManufacturerCountryCode: source?.manufacturerCountryCode,
    ParticipantOfferId: source?.participantOfferId,
    Price: source?.price,
    SumVat: source?.sumVat,
    TaxPercent: source?.taxPercent,
  };
}
