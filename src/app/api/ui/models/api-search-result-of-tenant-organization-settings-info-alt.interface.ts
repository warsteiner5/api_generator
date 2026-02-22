import { TenantOrganizationSettingsInfoAlt } from './tenant-organization-settings-info-alt.interface';

// @ts-ignore
export interface ApiSearchResultOfTenantOrganizationSettingsInfoAlt {
  currpage: number;
  invdata: TenantOrganizationSettingsInfoAlt[];
  showTotal: boolean;
  totalpages: number;
  totalrecords: number;
}
