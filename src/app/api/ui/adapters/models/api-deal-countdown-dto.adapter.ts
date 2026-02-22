import { DealCountdown } from '../../models/deal-countdown.interface';
import { ApiDealCountdownDto } from '../../../swagger/models/api-deal-countdown-dto';

export const apiDealCountdownDtoAdapter = (source?: DealCountdown | null): ApiDealCountdownDto => {
  return {
    CountDownDate: source?.countDownDate,
    IsShowTimer: source?.isShowTimer,
  };
}
