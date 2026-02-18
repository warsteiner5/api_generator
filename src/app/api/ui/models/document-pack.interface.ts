import { DealDocument } from './deal-document.interface';

export interface DocumentPack {
  createAt: string;
  documents: DealDocument[];
  id: number;
  isActual: boolean;
}
