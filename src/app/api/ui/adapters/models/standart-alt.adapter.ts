import { ApiStandartAltDto } from '../../../swagger/models/api-standart';
import { StandartAlt } from '../../models/standart-alt.interface';
import { standardTypeAltEnumAdapter } from '../enums/standard-type-alt-enum.adapter';

export const standartAltAdapter = (source?: ApiStandartAltDto | null): StandartAlt => {
  return {
    code: source?.Code,
    dateEnd: source?.DateEnd,
    dateInto: source?.DateInto,
    fullCode: source?.FullCode,
    id: source?.Id,
    isActual: source?.IsActual,
    name: source?.Name,
    parts: source?.Parts,
    rawCodes: source?.RawCodes,
    rawParts: source?.RawParts,
    standartType: source?.StandartType === null ? undefined : standardTypeAltEnumAdapter(source?.StandartType),
    status: source?.Status,
    type: source?.Type,
  };
}
