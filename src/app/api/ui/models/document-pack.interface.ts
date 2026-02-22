import { DealDocument } from './deal-document.interface';

// @ts-ignore
export interface DocumentPack {
  createAt: string;
  documents: DealDocument[];
  id: number;
  isActual: boolean;
}
