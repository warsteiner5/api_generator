import { CharacteristicValues } from './characteristic-values.interface';
import { CompetitiveListItemDocument } from './competitive-list-item-document.interface';
import { CompetitiveListItemStateEnum } from '../enums/competitive-list-item-state.enum';
import { ParticipantOffer } from './participant-offer.interface';
import { PriceRegionDetail } from './price-region-detail.interface';
import { VatRateStateEnum } from '../enums/vat-rate-state.enum';

export interface CompetitiveListItem {
  characteristicsValues: CharacteristicValues[];
  chatId: number;
  comment: string;
  createdDate: string;
  deliveryRegion: string;
  id: number;
  manufacturerCountries: string[];
  manufacturers: string[];
  offers: ParticipantOffer[];
  okeiCode: string;
  okeiName: string;
  participantOfferId: number;
  participantOrganizationGuid: string;
  participantOrganizationId: number;
  participantOrganizationName: string;
  priceListDocuments: CompetitiveListItemDocument[];
  priceListProductName: string;
  priceRegionDetails: PriceRegionDetail[];
  quantity: number;
  state: CompetitiveListItemStateEnum;
  supplierId: number;
  unitPrice: number;
  usePriceForAllRegions: boolean;
  vatRate: number;
  vatState: VatRateStateEnum;
}
