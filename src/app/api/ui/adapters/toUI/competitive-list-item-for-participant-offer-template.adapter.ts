import { ApiCompetitiveListItemForParticipantOfferTemplateDto } from '../../../swagger/models/api-competitive-list-item-for-participant-offer-template-dto';
import { CompetitiveListItemForParticipantOfferTemplate } from '../../models/competitive-list-item-for-participant-offer-template.interface';
import { adaptCharacteristicValuesToUI } from './characteristic-values.adapter';
import { adaptCompetitiveListItemDocumentToUI } from './competitive-list-item-document.adapter';
import { adaptCompetitiveListItemStateEnumToUI } from './competitive-list-item-state-enum.adapter';
import { adaptPriceRegionDetailToUI } from './price-region-detail.adapter';
import { adaptRequirementRequestForViewToUI } from './requirement-request-for-view.adapter';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';

export function adaptCompetitiveListItemForParticipantOfferTemplateToUI(source?: ApiCompetitiveListItemForParticipantOfferTemplateDto | null): CompetitiveListItemForParticipantOfferTemplate {
  return {
    characteristicsValues: (source?.CharacteristicsValues ?? []).map((item) => adaptCharacteristicValuesToUI(item)),
    chatId: source?.ChatId ?? 0,
    comment: source?.Comment ?? '',
    createdDate: source?.CreatedDate ?? '',
    deliveryRegion: source?.DeliveryRegion ?? '',
    id: source?.Id ?? 0,
    okeiCode: source?.OkeiCode ?? '',
    okeiName: source?.OkeiName ?? '',
    priceListDocuments: (source?.PriceListDocuments ?? []).map((item) => adaptCompetitiveListItemDocumentToUI(item)),
    priceListProductName: source?.PriceListProductName ?? '',
    priceRegionDetails: (source?.PriceRegionDetails ?? []).map((item) => adaptPriceRegionDetailToUI(item)),
    quantity: source?.Quantity ?? 0,
    requirementRequest: adaptRequirementRequestForViewToUI(source?.RequirementRequest),
    state: adaptCompetitiveListItemStateEnumToUI(source?.State),
    unitPrice: source?.UnitPrice ?? 0,
    usePriceForAllRegions: source?.UsePriceForAllRegions ?? false,
    vatRate: source?.VatRate ?? 0,
    vatState: adaptVatRateStateEnumToUI(source?.VatState),
  };
}
