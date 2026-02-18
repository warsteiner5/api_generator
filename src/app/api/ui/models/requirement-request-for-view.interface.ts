import { RequirementRequest } from './requirement-request.interface';

export type RequirementRequestForView = RequirementRequest & { 'PriceMin'?: number; 'PriceMax'?: number; 'PriceAverage'?: number; 'ShortOkeiName'?: string | null; 'IsEditRequirementRequestAvailable'?: boolean; 'ApprovedCharacteristicsCount'?: number | null; 'RejectedCharacteristicsCount'?: number | null; 'ConsiderationCharacteristicsCount'?: number | null; 'CompetetiveListItemCount'?: number | null; };
