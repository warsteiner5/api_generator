import { TagSettingsAdd } from './tag-settings-add.interface';

// @ts-ignore
export interface TagSettingsUpdate extends TagSettingsAdd {
  settingsId: string;
  priceFrom: number;
  priceTo: number;
  regions: string[];
}
