import { DealDocument } from './deal-document.interface';

// @ts-ignore
export interface DealExtendedInfoAlt {
  concludeDate: string;
  dealId: number;
  dealNumber: string;
  dealTerms: string;
  documents: DealDocument[];
}
