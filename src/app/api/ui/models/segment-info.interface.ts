import { Characteristic } from './characteristic.interface';

// @ts-ignore
export interface SegmentInfo {
  characteristics: Characteristic[];
  id: number;
  lastModificationDate: string;
  name: string;
}
