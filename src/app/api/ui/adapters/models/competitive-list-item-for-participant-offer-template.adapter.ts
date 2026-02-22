import { ApiCompetitiveListItemForParticipantOfferTemplateDto } from '../../../swagger/models/api-competitive-list-item-for-participant-offer-template-dto';
import { CompetitiveListItemForParticipantOfferTemplate } from '../../models/competitive-list-item-for-participant-offer-template.interface';
import { characteristicValuesAdapter } from './characteristic-values.adapter';
import { competitiveListItemDocumentAdapter } from './competitive-list-item-document.adapter';
import { competitiveListItemStateEnumAdapter } from '../enums/competitive-list-item-state-enum.adapter';
import { priceRegionDetailAdapter } from './price-region-detail.adapter';
import { requirementRequestForViewAdapter } from './requirement-request-for-view.adapter';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';

export const competitiveListItemForParticipantOfferTemplateAdapter = (source?: ApiCompetitiveListItemForParticipantOfferTemplateDto | null): CompetitiveListItemForParticipantOfferTemplate => {
  return {
    characteristicsValues: source?.CharacteristicsValues?.map((item) => characteristicValuesAdapter(item)),
    chatId: source?.ChatId,
    comment: source?.Comment,
    createdDate: source?.CreatedDate,
    deliveryRegion: source?.DeliveryRegion,
    id: source?.Id,
    okeiCode: source?.OkeiCode,
    okeiName: source?.OkeiName,
    priceListDocuments: source?.PriceListDocuments?.map((item) => competitiveListItemDocumentAdapter(item)),
    priceListProductName: source?.PriceListProductName,
    priceRegionDetails: source?.PriceRegionDetails?.map((item) => priceRegionDetailAdapter(item)),
    quantity: source?.Quantity,
    requirementRequest: source?.RequirementRequest === null ? undefined : requirementRequestForViewAdapter(source?.RequirementRequest),
    state: source?.State === null ? undefined : competitiveListItemStateEnumAdapter(source?.State),
    unitPrice: source?.UnitPrice,
    usePriceForAllRegions: source?.UsePriceForAllRegions,
    vatRate: source?.VatRate,
    vatState: source?.VatState === null ? undefined : vatRateStateEnumAdapter(source?.VatState),
  };
}
