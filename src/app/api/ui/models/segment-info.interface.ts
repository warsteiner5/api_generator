import { Characteristic } from './characteristic.interface';

export interface SegmentInfo {
  characteristics: Characteristic[];
  id: number;
  lastModificationDate: string;
  name: string;
}
