import { StandartAlt } from '../../models/standart-alt.interface';
import { ApiStandartAltDto } from '../../../swagger/models/api-standart';
import { apiStandardTypeAltEnumAdapter } from '../enums/api-standard-type.adapter';

export const apiStandartAltDtoAdapter = (source?: StandartAlt | null): ApiStandartAltDto => {
  return {
    Code: source?.code,
    DateEnd: source?.dateEnd,
    DateInto: source?.dateInto,
    FullCode: source?.fullCode,
    Id: source?.id,
    IsActual: source?.isActual,
    Name: source?.name,
    Parts: source?.parts,
    RawCodes: source?.rawCodes,
    RawParts: source?.rawParts,
    StandartType: source?.standartType === null ? undefined : apiStandardTypeAltEnumAdapter(source?.standartType),
    Status: source?.status,
    Type: source?.type,
  };
}
