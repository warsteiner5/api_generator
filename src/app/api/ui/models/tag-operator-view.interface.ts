import { TagObjectEnum } from '../enums/tag-object.enum';
import { TagParticipantOfferRuleListView } from './tag-participant-offer-rule-list-view.interface';
import { TagParticipantRuleListView } from './tag-participant-rule-list-view.interface';

// @ts-ignore
export interface TagOperatorView {
  code: string;
  description: string;
  filterText: string;
  hideable: boolean;
  hintText: string;
  id: number;
  imageGuid: string;
  isActive: boolean;
  isEnabledByDefault: boolean;
  isTenantsIncluded: boolean;
  name: string;
  tagObject: TagObjectEnum;
  tagParticipantOfferRules: TagParticipantOfferRuleListView[];
  tagParticipantRules: TagParticipantRuleListView[];
}
