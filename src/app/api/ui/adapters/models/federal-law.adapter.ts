import { ApiFederalLawDto } from '../../../swagger/models/api-federal-law-dto';
import { FederalLaw } from '../../models/federal-law.interface';

export const federalLawAdapter = (source?: ApiFederalLawDto | null): FederalLaw => {
  return {
    code: source?.Code,
    description: source?.Description,
    hasDeclaration: source?.HasDeclaration,
    hint: source?.Hint,
    id: source?.Id,
    is223: source?.Is223,
    is44: source?.Is44,
    isActual: source?.IsActual,
    isEisConcludeDealRequired: source?.IsEisConcludeDealRequired,
    name: source?.Name,
  };
}
