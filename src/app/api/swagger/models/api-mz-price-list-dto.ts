/* tslint:disable */
/* eslint-disable */
import { ApiBaseDtoWithCreateAndModificationDatesOfInteger } from '../models/api-base-dto-with-create-and-modification-dates-of-integer';
import { ApiDeliveryRegionInfoDto } from '../models/api-delivery-region-info-dto';
import { ApiMzPriceListAutoUpdateScheduleDto } from '../models/api-mz-price-list-auto-update-schedule-dto';
import { ApiParticipantOfferImportTaskDto } from '../models/api-participant-offer-import-task-dto';
import { ApiPriceListStateEnum } from '../models/api-price-list-state-enum';
import { ApiPriceListTypeEnum } from '../models/api-price-list-type-enum';
export type ApiMzPriceListDto = ApiBaseDtoWithCreateAndModificationDatesOfInteger & {
'ExternalId'?: string | null;
'Type'?: ApiPriceListTypeEnum;
'Name'?: string | null;
'Company'?: string | null;
'Url'?: string | null;
'ParticipantOffersCount'?: number;
'LastImportTask'?: ApiParticipantOfferImportTaskDto | null;
'AutoUpdateSchedule'?: ApiMzPriceListAutoUpdateScheduleDto | null;
'State'?: ApiPriceListStateEnum;
'IsHidden'?: boolean;
'OrganizationId'?: number;
'BelongedToTenantId'?: number | null;
'CreatedUserId'?: number | null;
'NotificationEmail'?: string | null;
'DeliveryRegionInfos'?: Array<ApiDeliveryRegionInfoDto> | null;
'IsDefault'?: boolean | null;
'IsRemoved'?: boolean;
'OnModeration'?: boolean;
'IsExportProduct'?: boolean;
};
