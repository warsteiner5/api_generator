/* tslint:disable */
/* eslint-disable */
import { ApiCharacteristicDto } from '../models/api-characteristic-dto';
export interface ApiCreateSegmentRequestAltDto {
  CharacteristicsValues?: Array<ApiCharacteristicDto> | null;
  Name?: string | null;
  Okpd2?: string | null;
}
