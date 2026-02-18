import { TradesFilterObjectAlt } from './trades-filter-object-alt.interface';
import { UsedClassificatorTypeEnum } from '../enums/used-classificator-type.enum';

export type TradesFilterObjectForParticipantAlt = TradesFilterObjectAlt & { 'OnlyTradesWithMyApplications'?: boolean; 'ClassificatorCodes'?: Array<string> | null; 'UsedClassificatorType'?: UsedClassificatorTypeEnum | null; 'CustomerAddress'?: string | null; };
