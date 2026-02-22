import { DealFormEnum } from '../enums/deal-form.enum';

// @ts-ignore
export interface ChangeForm {
  dealForm: DealFormEnum;
  dealId: number;
  tradeId: number;
}
