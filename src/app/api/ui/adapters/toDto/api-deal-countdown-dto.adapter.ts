import { DealCountdown } from '../../models/deal-countdown.interface';
import { ApiDealCountdownDto } from '../../../swagger/models/api-deal-countdown-dto';

export function adaptApiDealCountdownDto(source?: DealCountdown | null): ApiDealCountdownDto {
  return {
    CountDownDate: source?.countDownDate,
    IsShowTimer: source?.isShowTimer,
  };
}
