import { StandardTypeAltEnum } from '../enums/standard-type-alt.enum';

// @ts-ignore
export interface StandartAlt {
  code: string;
  dateEnd: string;
  dateInto: string;
  fullCode: string;
  id: number;
  isActual: boolean;
  name: string;
  parts: string[];
  rawCodes: string[];
  rawParts: string[];
  standartType: StandardTypeAltEnum;
  status: string;
  type: string;
}
