import { MarketDealStateEnum } from '../enums/market-deal-state.enum';
import { PriceRegionDetail } from './price-region-detail.interface';
import { VatRateStateEnum } from '../enums/vat-rate-state.enum';

export interface AcceptedPriceListInfo {
  customerName: string;
  duringDays: number;
  id: number;
  isFavorite: boolean;
  manufacturer: string;
  minQuantity: number;
  name: string;
  offerTerms: string;
  organizerId: number;
  participant: string;
  pictureGuid: string;
  price: number;
  priceRegionDetails: PriceRegionDetail[];
  quantity: number;
  shortOkeiName: string;
  state: MarketDealStateEnum;
  stateString: string;
  unitPrice: number;
  vatRate: number;
  vatRateState: VatRateStateEnum;
}
