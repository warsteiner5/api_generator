import { Characteristic } from './characteristic.interface';

export interface CreateSegmentRequestAlt {
  characteristicsValues: Characteristic[];
  name: string;
  okpd2: string;
}
