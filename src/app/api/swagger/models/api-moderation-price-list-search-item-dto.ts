/* tslint:disable */
/* eslint-disable */
import { ApiComplaintsCountInfoDto } from '../models/api-complaints-count-info-dto';
import { ApiOrganizationInfoForModerationInfoAltDto } from '../models/api-organization-info-for-moderation-info';
import { ApiUploaderRoleAltEnum } from '../models/api-uploader-role';
import { ApiUserNameInfoAltDto } from '../models/api-user-name-info';
export interface ApiModerationPriceListSearchItemDto {
  ActiveCount?: number;
  ComplaintsInfo?: ApiComplaintsCountInfoDto | null;
  DraftsCount?: number;
  HasActiveModerations?: boolean;
  Id?: number;
  IsFinished?: boolean;
  IsModerationRequired?: boolean | null;
  LastModerated?: string | null;
  LastModified?: string;
  Manager?: ApiUserNameInfoAltDto | null;
  Moderator?: ApiUserNameInfoAltDto | null;
  Name?: string | null;
  Organization?: ApiOrganizationInfoForModerationInfoAltDto | null;
  ParticipantOffersCount?: number;
  UploaderRole?: ApiUploaderRoleAltEnum;
  WaitingForApproveCount?: number;
}
