import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessengerApiService } from '../../swagger/services/messenger-api.service';
import { MessengerConnectTelegramParams, messengerConnectTelegramAdapter } from './params/messenger-connect-telegram.params';
import { MessengerGetMessengerStatusParams, messengerGetMessengerStatusAdapter } from './params/messenger-get-messenger-status.params';
import { MessengerSendOneApplicationsEventParams, messengerSendOneApplicationsEventAdapter } from './params/messenger-send-one-applications-event.params';
import { MessengerSendTradeWithApplicationsEndsEventParams, messengerSendTradeWithApplicationsEndsEventAdapter } from './params/messenger-send-trade-with-applications-ends-event.params';
import { MessengerSendTradeWithoutApplicationsEndsEventParams, messengerSendTradeWithoutApplicationsEndsEventAdapter } from './params/messenger-send-trade-without-applications-ends-event.params';
import { MessengerStatusAlt } from '../models/messenger-status-alt.interface';
import { messengerStatusAltAdapter } from '../adapters/models/messenger-status-alt.adapter';
import { Observable } from 'rxjs';
import { TelegramUrlAlt } from '../models/telegram-url-alt.interface';
import { telegramUrlAltAdapter } from '../adapters/models/telegram-url-alt.adapter';

@Injectable({ providedIn: 'root' })
export class MessengerRepository {
  private readonly _api = inject(MessengerApiService);

  messengerConnectTelegram(params?: MessengerConnectTelegramParams): Observable<TelegramUrlAlt> {
    return this._api.messengerConnectTelegram(messengerConnectTelegramAdapter(params)).pipe(
      map((res) => telegramUrlAltAdapter(res?.data))
    );
  }

  messengerGetMessengerStatus(params?: MessengerGetMessengerStatusParams): Observable<MessengerStatusAlt> {
    return this._api.messengerGetMessengerStatus(messengerGetMessengerStatusAdapter(params)).pipe(
      map((res) => messengerStatusAltAdapter(res?.data))
    );
  }

  messengerSendOneApplicationsEvent(params?: MessengerSendOneApplicationsEventParams): Observable<void> {
    return this._api.messengerSendOneApplicationsEvent(messengerSendOneApplicationsEventAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  messengerSendTradeWithApplicationsEndsEvent(params?: MessengerSendTradeWithApplicationsEndsEventParams): Observable<void> {
    return this._api.messengerSendTradeWithApplicationsEndsEvent(messengerSendTradeWithApplicationsEndsEventAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  messengerSendTradeWithoutApplicationsEndsEvent(params?: MessengerSendTradeWithoutApplicationsEndsEventParams): Observable<void> {
    return this._api.messengerSendTradeWithoutApplicationsEndsEvent(messengerSendTradeWithoutApplicationsEndsEventAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

}
