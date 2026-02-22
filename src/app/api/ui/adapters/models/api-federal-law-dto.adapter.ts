import { FederalLaw } from '../../models/federal-law.interface';
import { ApiFederalLawDto } from '../../../swagger/models/api-federal-law-dto';

export const apiFederalLawDtoAdapter = (source?: FederalLaw | null): ApiFederalLawDto => {
  return {
    Code: source?.code,
    Description: source?.description,
    HasDeclaration: source?.hasDeclaration,
    Hint: source?.hint,
    Id: source?.id,
    Is223: source?.is223,
    Is44: source?.is44,
    IsActual: source?.isActual,
    IsEisConcludeDealRequired: source?.isEisConcludeDealRequired,
    Name: source?.name,
  };
}
