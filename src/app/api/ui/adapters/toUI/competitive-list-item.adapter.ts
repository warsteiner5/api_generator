import { ApiCompetitiveListItemDto } from '../../../swagger/models/api-competitive-list-item-dto';
import { CompetitiveListItem } from '../../models/competitive-list-item.interface';
import { adaptCharacteristicValuesToUI } from './characteristic-values.adapter';
import { adaptCompetitiveListItemDocumentToUI } from './competitive-list-item-document.adapter';
import { adaptCompetitiveListItemStateEnumToUI } from './competitive-list-item-state-enum.adapter';
import { adaptParticipantOfferToUI } from './participant-offer.adapter';
import { adaptPriceRegionDetailToUI } from './price-region-detail.adapter';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';

export function adaptCompetitiveListItemToUI(source?: ApiCompetitiveListItemDto | null): CompetitiveListItem {
  return {
    characteristicsValues: (source?.CharacteristicsValues ?? []).map((item) => adaptCharacteristicValuesToUI(item)),
    chatId: source?.ChatId ?? 0,
    comment: source?.Comment ?? '',
    createdDate: source?.CreatedDate ?? '',
    deliveryRegion: source?.DeliveryRegion ?? '',
    id: source?.Id ?? 0,
    manufacturerCountries: source?.ManufacturerCountries ?? [],
    manufacturers: source?.Manufacturers ?? [],
    offers: (source?.Offers ?? []).map((item) => adaptParticipantOfferToUI(item)),
    okeiCode: source?.OkeiCode ?? '',
    okeiName: source?.OkeiName ?? '',
    participantOfferId: source?.ParticipantOfferId ?? 0,
    participantOrganizationGuid: source?.ParticipantOrganizationGuid ?? '',
    participantOrganizationId: source?.ParticipantOrganizationId ?? 0,
    participantOrganizationName: source?.ParticipantOrganizationName ?? '',
    priceListDocuments: (source?.PriceListDocuments ?? []).map((item) => adaptCompetitiveListItemDocumentToUI(item)),
    priceListProductName: source?.PriceListProductName ?? '',
    priceRegionDetails: (source?.PriceRegionDetails ?? []).map((item) => adaptPriceRegionDetailToUI(item)),
    quantity: source?.Quantity ?? 0,
    state: adaptCompetitiveListItemStateEnumToUI(source?.State),
    supplierId: source?.SupplierId ?? 0,
    unitPrice: source?.UnitPrice ?? 0,
    usePriceForAllRegions: source?.UsePriceForAllRegions ?? false,
    vatRate: source?.VatRate ?? 0,
    vatState: adaptVatRateStateEnumToUI(source?.VatState),
  };
}
