import { DealFormEnum } from '../enums/deal-form.enum';

export interface ChangeForm {
  dealForm: DealFormEnum;
  dealId: number;
  tradeId: number;
}
