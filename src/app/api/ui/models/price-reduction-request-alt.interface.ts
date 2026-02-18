import { PriceReductionPositionAlt } from './price-reduction-position-alt.interface';

export interface PriceReductionRequestAlt {
  coefficient: number;
  isPriceWithoutVat: boolean;
  positions: PriceReductionPositionAlt[];
}
