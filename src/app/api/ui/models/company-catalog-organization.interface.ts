import { Industry } from './industry.interface';
import { OrganizationCountryAltEnum } from '../enums/organization-country-alt.enum';
import { OrganizationTypeEnum } from '../enums/organization-type.enum';
import { TagView } from './tag-view.interface';

export interface CompanyCatalogOrganization {
  country: OrganizationCountryAltEnum;
  foreignParticipantId: string;
  guid: string;
  hasCatalogAgreement: boolean;
  industries: Industry[];
  inn: string;
  isFavorite: boolean;
  kpp: string;
  logoGuid: string;
  name: string;
  participantOfferCount: number;
  regionCode: string;
  tags: TagView[];
  type: OrganizationTypeEnum;
}
