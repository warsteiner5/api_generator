import { TagSettingsAdd } from './tag-settings-add.interface';

export type TagSettingsUpdate = TagSettingsAdd & { 'SettingsId'?: string | null; 'PriceFrom'?: number | null; 'PriceTo'?: number | null; 'Regions'?: Array<string> | null; };
