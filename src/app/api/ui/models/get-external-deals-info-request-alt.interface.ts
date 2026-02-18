import { DealObjectEnum } from '../enums/deal-object.enum';

export interface GetExternalDealsInfoRequestAlt {
  dealIds: number[];
  dealObject: DealObjectEnum;
  externalSystemId: number;
}
