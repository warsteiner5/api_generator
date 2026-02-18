import { ApiStandartAltDto } from '../../../swagger/models/api-standart';
import { StandartAlt } from '../../models/standart-alt.interface';
import { adaptStandardTypeAltEnumToUI } from './standard-type-alt-enum.adapter';

export function adaptStandartAltToUI(source?: ApiStandartAltDto | null): StandartAlt {
  return {
    code: source?.Code ?? '',
    dateEnd: source?.DateEnd ?? '',
    dateInto: source?.DateInto ?? '',
    fullCode: source?.FullCode ?? '',
    id: source?.Id ?? 0,
    isActual: source?.IsActual ?? false,
    name: source?.Name ?? '',
    parts: source?.Parts ?? [],
    rawCodes: source?.RawCodes ?? [],
    rawParts: source?.RawParts ?? [],
    standartType: adaptStandardTypeAltEnumToUI(source?.StandartType),
    status: source?.Status ?? '',
    type: source?.Type ?? '',
  };
}
