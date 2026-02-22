import { BaseDtoWithCreateAndModificationDatesOfInteger } from './base-dto-with-create-and-modification-dates-of-integer.interface';
import { DeliveryRegionInfo } from './delivery-region-info.interface';
import { MzPriceListAutoUpdateSchedule } from './mz-price-list-auto-update-schedule.interface';
import { ParticipantOfferImportTask } from './participant-offer-import-task.interface';
import { PriceListStateEnum } from '../enums/price-list-state.enum';
import { PriceListTypeEnum } from '../enums/price-list-type.enum';

// @ts-ignore
export interface MzPriceList extends BaseDtoWithCreateAndModificationDatesOfInteger {
  externalId: string;
  type: PriceListTypeEnum;
  name: string;
  company: string;
  url: string;
  participantOffersCount: number;
  lastImportTask: ParticipantOfferImportTask;
  autoUpdateSchedule: MzPriceListAutoUpdateSchedule;
  state: PriceListStateEnum;
  isHidden: boolean;
  organizationId: number;
  belongedToTenantId: number;
  createdUserId: number;
  notificationEmail: string;
  deliveryRegionInfos: DeliveryRegionInfo[];
  isDefault: boolean;
  isRemoved: boolean;
  onModeration: boolean;
  isExportProduct: boolean;
}
