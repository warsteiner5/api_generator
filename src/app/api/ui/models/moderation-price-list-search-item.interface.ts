import { ComplaintsCountInfo } from './complaints-count-info.interface';
import { OrganizationInfoForModerationInfoAlt } from './organization-info-for-moderation-info-alt.interface';
import { UploaderRoleAltEnum } from '../enums/uploader-role-alt.enum';
import { UserNameInfoAlt } from './user-name-info-alt.interface';

export interface ModerationPriceListSearchItem {
  activeCount: number;
  complaintsInfo: ComplaintsCountInfo;
  draftsCount: number;
  hasActiveModerations: boolean;
  id: number;
  isFinished: boolean;
  isModerationRequired: boolean;
  lastModerated: string;
  lastModified: string;
  manager: UserNameInfoAlt;
  moderator: UserNameInfoAlt;
  name: string;
  organization: OrganizationInfoForModerationInfoAlt;
  participantOffersCount: number;
  uploaderRole: UploaderRoleAltEnum;
  waitingForApproveCount: number;
}
