import { PriceReductionPositionAlt } from './price-reduction-position-alt.interface';

// @ts-ignore
export interface PriceReductionRequestAlt {
  coefficient: number;
  isPriceWithoutVat: boolean;
  positions: PriceReductionPositionAlt[];
}
