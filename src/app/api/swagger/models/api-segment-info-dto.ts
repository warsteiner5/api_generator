/* tslint:disable */
/* eslint-disable */
import { ApiCharacteristicDto } from '../models/api-characteristic-dto';
export interface ApiSegmentInfoDto {
  Characteristics?: Array<ApiCharacteristicDto> | null;
  Id?: number;
  LastModificationDate?: string;
  Name?: string | null;
}
