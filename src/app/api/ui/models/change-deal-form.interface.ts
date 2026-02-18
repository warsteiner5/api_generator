import { DealDocument } from './deal-document.interface';
import { DealObjectEnum } from '../enums/deal-object.enum';
import { DealStateEnum } from '../enums/deal-state.enum';

export interface ChangeDealForm {
  cancellationReason: string;
  conclusionDate: string;
  dealCustomNumber: string;
  dealObject: DealObjectEnum;
  documents: DealDocument[];
  executionFrom: string;
  executionTo: string;
  id: number;
  price: number;
  state: DealStateEnum;
}
