import { MarketDealPositionCountry } from './market-deal-position-country.interface';

// @ts-ignore
export interface MarketDealPosition {
  dealPositionCountries: MarketDealPositionCountry[];
  id: number;
  lotItemId: number;
  name: string;
  okeiCode: string;
  okeiShortName: string;
  okpd2Code: string;
  okpd2Name: string;
  positionNumber: number;
  price: number;
  quantity: number;
}
