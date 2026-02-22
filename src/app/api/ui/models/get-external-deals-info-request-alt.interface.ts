import { DealObjectEnum } from '../enums/deal-object.enum';

// @ts-ignore
export interface GetExternalDealsInfoRequestAlt {
  dealIds: number[];
  dealObject: DealObjectEnum;
  externalSystemId: number;
}
