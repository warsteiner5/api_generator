import { Okpd2 } from '../../models/okpd-2.interface';
import { ApiOkpd2Dto } from '../../../swagger/models/api-okpd-2-dto';

export const apiOkpd2DtoAdapter = (source?: Okpd2 | null): ApiOkpd2Dto => {
  return {
    Code: source?.code,
    Name: source?.name,
  };
}
