import { Characteristic } from './characteristic.interface';

// @ts-ignore
export interface CreateSegmentRequestAlt {
  characteristicsValues: Characteristic[];
  name: string;
  okpd2: string;
}
