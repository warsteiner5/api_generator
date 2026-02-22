import { StandartAlt } from './standart-alt.interface';

// @ts-ignore
export interface PurchaseObjectCardAlt {
  additionalInfo: string;
  hasNotActualStandart: boolean;
  id: number;
  isGrammarError: boolean;
  isMatch: boolean;
  lotId: number;
  nationalCode: string;
  notActualStandarts: string[];
  okpdId: string;
  percent: string;
  price: string;
  profitPrice: number;
  quantityValue: string;
  rawAdditionalInfo: string;
  rawQuantityValue: number;
  rawTRUName: string;
  searchQuery: string;
  serializedProfitModel: string;
  standarts: StandartAlt[];
  sum: string;
  truName: string;
}
