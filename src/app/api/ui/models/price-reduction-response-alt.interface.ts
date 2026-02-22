import { PriceReductionPositionAlt } from './price-reduction-position-alt.interface';

// @ts-ignore
export interface PriceReductionResponseAlt {
  positions: PriceReductionPositionAlt[];
  sumVat: number;
  sumWithVat: number;
  sumWithoutVat: number;
  totalSum: number;
}
