import { KtruCharacteristicDto2 } from './ktru-characteristic-dto-2.interface';

export interface Ktru {
  applicationDateEnd: string;
  applicationDateStart: string;
  characteristics: KtruCharacteristicDto2[];
  code: string;
  description: string;
  inclusionDate: string;
  name: string;
  okeiNames: string[];
  okpd2Code: string;
  publishDate: string;
  version: number;
}
