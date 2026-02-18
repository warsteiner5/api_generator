/* tslint:disable */
/* eslint-disable */
import { ApiKtruCharacteristicDto2 } from '../models/api-ktru-characteristic-dto-2';
export interface ApiKtruDto {
  ApplicationDateEnd?: string | null;
  ApplicationDateStart?: string | null;
  Characteristics?: Array<ApiKtruCharacteristicDto2> | null;
  Code?: string | null;
  Description?: string | null;
  InclusionDate?: string | null;
  Name?: string | null;
  OkeiNames?: Array<string> | null;
  Okpd2Code?: string | null;
  PublishDate?: string | null;
  Version?: number;
}
