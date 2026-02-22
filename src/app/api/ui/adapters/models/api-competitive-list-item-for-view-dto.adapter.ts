import { CompetitiveListItemForView } from '../../models/competitive-list-item-for-view.interface';
import { ApiCompetitiveListItemForViewDto } from '../../../swagger/models/api-competitive-list-item-for-view-dto';
import { apiCharacteristicValuesDtoAdapter } from './api-characteristic-values-dto.adapter';
import { apiCompetitiveListItemDocumentDtoAdapter } from './api-competitive-list-item-document-dto.adapter';
import { apiPriceRegionDetailDtoAdapter } from './api-price-region-detail-dto.adapter';
import { apiSupplierCharacteristicForViewDtoAdapter } from './api-supplier-characteristic-for-view-dto.adapter';

export const apiCompetitiveListItemForViewDtoAdapter = (source?: CompetitiveListItemForView | null): ApiCompetitiveListItemForViewDto => {
  return {
    CharacteristicsValues: source?.characteristicsValues?.map((item) => apiCharacteristicValuesDtoAdapter(item)),
    Comment: source?.comment,
    Documents: source?.documents?.map((item) => apiCompetitiveListItemDocumentDtoAdapter(item)),
    Id: source?.id,
    Manufacture: source?.manufacture,
    ManufactureCountry: source?.manufactureCountry,
    OkeiCode: source?.okeiCode,
    Okpd2: source?.okpd2,
    PriceRegionDetails: source?.priceRegionDetails?.map((item) => apiPriceRegionDetailDtoAdapter(item)),
    Quantity: source?.quantity,
    RequirementRequestId: source?.requirementRequestId,
    SupplierCharacteristics: source?.supplierCharacteristics?.map((item) => apiSupplierCharacteristicForViewDtoAdapter(item)),
    SupplierId: source?.supplierId,
    UnitPrice: source?.unitPrice,
    UsePriceForAllRegions: source?.usePriceForAllRegions,
  };
}
