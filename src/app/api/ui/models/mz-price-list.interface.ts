import { BaseDtoWithCreateAndModificationDatesOfIntegerAlt } from './base-dto-with-create-and-modification-dates-of-integer-alt.interface';
import { DeliveryRegionInfo } from './delivery-region-info.interface';
import { MzPriceListAutoUpdateSchedule } from './mz-price-list-auto-update-schedule.interface';
import { ParticipantOfferImportTask } from './participant-offer-import-task.interface';
import { PriceListStateEnum } from '../enums/price-list-state.enum';
import { PriceListTypeEnum } from '../enums/price-list-type.enum';

export type MzPriceList = BaseDtoWithCreateAndModificationDatesOfIntegerAlt & { 'ExternalId'?: string | null; 'Type'?: PriceListTypeEnum; 'Name'?: string | null; 'Company'?: string | null; 'Url'?: string | null; 'ParticipantOffersCount'?: number; 'LastImportTask'?: ParticipantOfferImportTask | null; 'AutoUpdateSchedule'?: MzPriceListAutoUpdateSchedule | null; 'State'?: PriceListStateEnum; 'IsHidden'?: boolean; 'OrganizationId'?: number; 'BelongedToTenantId'?: number | null; 'CreatedUserId'?: number | null; 'NotificationEmail'?: string | null; 'DeliveryRegionInfos'?: Array<DeliveryRegionInfo> | null; 'IsDefault'?: boolean | null; 'IsRemoved'?: boolean; 'OnModeration'?: boolean; 'IsExportProduct'?: boolean; };
