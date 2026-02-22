import { Injectable, inject } from '@angular/core';
import { InviteApiService } from '../../swagger/services/invite-api.service';
import { InviteGetEmailsForInviteParams, inviteGetEmailsForInviteAdapter } from './params/invite-get-emails-for-invite.params';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InviteRepository {
  private readonly _api = inject(InviteApiService);

  inviteGetEmailsForInvite(params: InviteGetEmailsForInviteParams): Observable<void> {
    return this._api.inviteGetEmailsForInvite(inviteGetEmailsForInviteAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

}
