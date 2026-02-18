import { CompetitiveListItemForParticipantOfferTemplate } from '../../models/competitive-list-item-for-participant-offer-template.interface';
import { ApiCompetitiveListItemForParticipantOfferTemplateDto } from '../../../swagger/models/api-competitive-list-item-for-participant-offer-template-dto';
import { adaptApiCharacteristicValuesDto } from './api-characteristic-values-dto.adapter';
import { adaptApiCompetitiveListItemDocumentDto } from './api-competitive-list-item-document-dto.adapter';
import { adaptApiCompetitiveListItemStateEnum } from './api-competitive-list-item-state-enum.adapter';
import { adaptApiPriceRegionDetailDto } from './api-price-region-detail-dto.adapter';
import { adaptApiRequirementRequestForViewDto } from './api-requirement-request-for-view-dto.adapter';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';

export function adaptApiCompetitiveListItemForParticipantOfferTemplateDto(source?: CompetitiveListItemForParticipantOfferTemplate | null): ApiCompetitiveListItemForParticipantOfferTemplateDto {
  return {
    CharacteristicsValues: (source?.characteristicsValues ?? []).map((item) => adaptApiCharacteristicValuesDto(item)),
    ChatId: source?.chatId,
    Comment: source?.comment,
    CreatedDate: source?.createdDate,
    DeliveryRegion: source?.deliveryRegion,
    Id: source?.id,
    OkeiCode: source?.okeiCode,
    OkeiName: source?.okeiName,
    PriceListDocuments: (source?.priceListDocuments ?? []).map((item) => adaptApiCompetitiveListItemDocumentDto(item)),
    PriceListProductName: source?.priceListProductName,
    PriceRegionDetails: (source?.priceRegionDetails ?? []).map((item) => adaptApiPriceRegionDetailDto(item)),
    Quantity: source?.quantity,
    RequirementRequest: adaptApiRequirementRequestForViewDto(source?.requirementRequest),
    State: adaptApiCompetitiveListItemStateEnum(source?.state),
    UnitPrice: source?.unitPrice,
    UsePriceForAllRegions: source?.usePriceForAllRegions,
    VatRate: source?.vatRate,
    VatState: adaptApiVatRateStateEnum(source?.vatState),
  };
}
