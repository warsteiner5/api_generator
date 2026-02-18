import { ApplicationItem } from '../../models/application-item.interface';
import { ApiApplicationItemDto } from '../../../swagger/models/api-application-item-dto';
import { adaptApiApplicationDocumentDto } from './api-application-document-dto.adapter';

export function adaptApiApplicationItemDto(source?: ApplicationItem | null): ApiApplicationItemDto {
  return {
    CountryConfirmation: source?.countryConfirmation,
    Documents: (source?.documents ?? []).map((item) => adaptApiApplicationDocumentDto(item)),
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
