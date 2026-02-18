import { CharacteristicValues } from './characteristic-values.interface';
import { CompetitiveListItemDocument } from './competitive-list-item-document.interface';
import { CompetitiveListItemStateEnum } from '../enums/competitive-list-item-state.enum';
import { PriceRegionDetail } from './price-region-detail.interface';
import { RequirementRequestForView } from './requirement-request-for-view.interface';
import { VatRateStateEnum } from '../enums/vat-rate-state.enum';

export interface CompetitiveListItemForParticipantOfferTemplate {
  characteristicsValues: CharacteristicValues[];
  chatId: number;
  comment: string;
  createdDate: string;
  deliveryRegion: string;
  id: number;
  okeiCode: string;
  okeiName: string;
  priceListDocuments: CompetitiveListItemDocument[];
  priceListProductName: string;
  priceRegionDetails: PriceRegionDetail[];
  quantity: number;
  requirementRequest: RequirementRequestForView;
  state: CompetitiveListItemStateEnum;
  unitPrice: number;
  usePriceForAllRegions: boolean;
  vatRate: number;
  vatState: VatRateStateEnum;
}
