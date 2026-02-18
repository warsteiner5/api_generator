import { ApiKeySizesAltDto } from '../../../swagger/models/api-key-sizes';
import { KeySizesAlt } from '../../models/key-sizes-alt.interface';

export function adaptKeySizesAltToUI(source?: ApiKeySizesAltDto | null): KeySizesAlt {
  return {
    maxSize: source?.MaxSize ?? 0,
    minSize: source?.MinSize ?? 0,
    skipSize: source?.SkipSize ?? 0,
  };
}
