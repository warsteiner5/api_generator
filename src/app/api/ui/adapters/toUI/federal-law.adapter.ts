import { ApiFederalLawDto } from '../../../swagger/models/api-federal-law-dto';
import { FederalLaw } from '../../models/federal-law.interface';

export function adaptFederalLawToUI(source?: ApiFederalLawDto | null): FederalLaw {
  return {
    code: source?.Code ?? '',
    description: source?.Description ?? '',
    hasDeclaration: source?.HasDeclaration ?? false,
    hint: source?.Hint ?? '',
    id: source?.Id ?? 0,
    is223: source?.Is223 ?? false,
    is44: source?.Is44 ?? false,
    isActual: source?.IsActual ?? false,
    isEisConcludeDealRequired: source?.IsEisConcludeDealRequired ?? false,
    name: source?.Name ?? '',
  };
}
