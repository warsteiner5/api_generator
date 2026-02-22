import { CompetitiveListItemForParticipantOfferTemplate } from '../../models/competitive-list-item-for-participant-offer-template.interface';
import { ApiCompetitiveListItemForParticipantOfferTemplateDto } from '../../../swagger/models/api-competitive-list-item-for-participant-offer-template-dto';
import { apiCharacteristicValuesDtoAdapter } from './api-characteristic-values-dto.adapter';
import { apiCompetitiveListItemDocumentDtoAdapter } from './api-competitive-list-item-document-dto.adapter';
import { apiCompetitiveListItemStateEnumAdapter } from '../enums/api-competitive-list-item-state-enum.adapter';
import { apiPriceRegionDetailDtoAdapter } from './api-price-region-detail-dto.adapter';
import { apiRequirementRequestForViewDtoAdapter } from './api-requirement-request-for-view-dto.adapter';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';

export const apiCompetitiveListItemForParticipantOfferTemplateDtoAdapter = (source?: CompetitiveListItemForParticipantOfferTemplate | null): ApiCompetitiveListItemForParticipantOfferTemplateDto => {
  return {
    CharacteristicsValues: source?.characteristicsValues?.map((item) => apiCharacteristicValuesDtoAdapter(item)),
    ChatId: source?.chatId,
    Comment: source?.comment,
    CreatedDate: source?.createdDate,
    DeliveryRegion: source?.deliveryRegion,
    Id: source?.id,
    OkeiCode: source?.okeiCode,
    OkeiName: source?.okeiName,
    PriceListDocuments: source?.priceListDocuments?.map((item) => apiCompetitiveListItemDocumentDtoAdapter(item)),
    PriceListProductName: source?.priceListProductName,
    PriceRegionDetails: source?.priceRegionDetails?.map((item) => apiPriceRegionDetailDtoAdapter(item)),
    Quantity: source?.quantity,
    RequirementRequest: source?.requirementRequest === null ? undefined : apiRequirementRequestForViewDtoAdapter(source?.requirementRequest),
    State: source?.state === null ? undefined : apiCompetitiveListItemStateEnumAdapter(source?.state),
    UnitPrice: source?.unitPrice,
    UsePriceForAllRegions: source?.usePriceForAllRegions,
    VatRate: source?.vatRate,
    VatState: source?.vatState === null ? undefined : apiVatRateStateEnumAdapter(source?.vatState),
  };
}
