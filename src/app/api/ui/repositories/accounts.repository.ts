import { Account } from '../models/account.interface';
import { AccountsApiService } from '../../swagger/services/accounts-api.service';
import { AccountsCreateBanksDetailsByAccountParams, accountsCreateBanksDetailsByAccountParamsAdapter } from './params/accounts-create-banks-details-by-account.params';
import { AccountsEditBanksDetailsByAccountParams, accountsEditBanksDetailsByAccountParamsAdapter } from './params/accounts-edit-banks-details-by-account.params';
import { AccountsExportTransactionToExcelParams, accountsExportTransactionToExcelParamsAdapter } from './params/accounts-export-transaction-to-excel.params';
import { AccountsGetAccountRefillDocumentParams, accountsGetAccountRefillDocumentParamsAdapter } from './params/accounts-get-account-refill-document.params';
import { AccountsGetAccountRefillHtmlDocumentParams, accountsGetAccountRefillHtmlDocumentParamsAdapter } from './params/accounts-get-account-refill-html-document.params';
import { AccountsGetBanksDetailsByAccountParams, accountsGetBanksDetailsByAccountParamsAdapter } from './params/accounts-get-banks-details-by-account.params';
import { AccountsGetBanksDetailsListByAccountParams, accountsGetBanksDetailsListByAccountParamsAdapter } from './params/accounts-get-banks-details-list-by-account.params';
import { AccountsGetCommissionByQuotationParams, accountsGetCommissionByQuotationParamsAdapter } from './params/accounts-get-commission-by-quotation.params';
import { AccountsGetCommissionByTradeParams, accountsGetCommissionByTradeParamsAdapter } from './params/accounts-get-commission-by-trade.params';
import { AccountsGetDocumentsByAccountParams, accountsGetDocumentsByAccountParamsAdapter } from './params/accounts-get-documents-by-account.params';
import { AccountsGetExternalUserInfoParams, accountsGetExternalUserInfoParamsAdapter } from './params/accounts-get-external-user-info.params';
import { AccountsGetLotCommissionByLotParams, accountsGetLotCommissionByLotParamsAdapter } from './params/accounts-get-lot-commission-by-lot.params';
import { AccountsGetLotCommissionByQuotationParams, accountsGetLotCommissionByQuotationParamsAdapter } from './params/accounts-get-lot-commission-by-quotation.params';
import { AccountsGetLotCommissionInternalParams, accountsGetLotCommissionInternalParamsAdapter } from './params/accounts-get-lot-commission-internal.params';
import { AccountsGetMyAccountsParams, accountsGetMyAccountsParamsAdapter } from './params/accounts-get-my-accounts.params';
import { AccountsGetTransactionParams, accountsGetTransactionParamsAdapter } from './params/accounts-get-transaction.params';
import { AccountsGetTransactionsByAccountParams, accountsGetTransactionsByAccountParamsAdapter } from './params/accounts-get-transactions-by-account.params';
import { adaptAccountToUI } from '../adapters/toUI/account.adapter';
import { adaptBankingDetailsToUI } from '../adapters/toUI/banking-details.adapter';
import { adaptExternalUserInfoAltToUI } from '../adapters/toUI/external-user-info-alt.adapter';
import { adaptFinDocumentToUI } from '../adapters/toUI/fin-document.adapter';
import { adaptTransactionShortToUI } from '../adapters/toUI/transaction-short.adapter';
import { adaptTransactionToUI } from '../adapters/toUI/transaction.adapter';
import { BankingDetails } from '../models/banking-details.interface';
import { ExternalUserInfoAlt } from '../models/external-user-info-alt.interface';
import { FinDocument } from '../models/fin-document.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.interface';
import { TransactionShort } from '../models/transaction-short.interface';

@Injectable({ providedIn: 'root' })
export class AccountsRepository {
  private readonly _api = inject(AccountsApiService);

  accountsCreateBanksDetailsByAccount(params: AccountsCreateBanksDetailsByAccountParams): Observable<number> {
    return this._api.accountsCreateBanksDetailsByAccount(accountsCreateBanksDetailsByAccountParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  accountsEditBanksDetailsByAccount(params: AccountsEditBanksDetailsByAccountParams): Observable<number> {
    return this._api.accountsEditBanksDetailsByAccount(accountsEditBanksDetailsByAccountParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  accountsExportTransactionToExcel(params: AccountsExportTransactionToExcelParams): Observable<Blob> {
    return this._api.accountsExportTransactionToExcel(accountsExportTransactionToExcelParamsAdapter.adapt(params));
  }

  accountsGetAccountRefillDocument(params: AccountsGetAccountRefillDocumentParams): Observable<Blob> {
    return this._api.accountsGetAccountRefillDocument(accountsGetAccountRefillDocumentParamsAdapter.adapt(params));
  }

  accountsGetAccountRefillHtmlDocument(params: AccountsGetAccountRefillHtmlDocumentParams): Observable<string> {
    return this._api.accountsGetAccountRefillHtmlDocument(accountsGetAccountRefillHtmlDocumentParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  accountsGetBanksDetailsByAccount(params: AccountsGetBanksDetailsByAccountParams): Observable<BankingDetails> {
    return this._api.accountsGetBanksDetailsByAccount(accountsGetBanksDetailsByAccountParamsAdapter.adapt(params)).pipe(
      map((res) => adaptBankingDetailsToUI(res?.data))
    );
  }

  accountsGetBanksDetailsListByAccount(params: AccountsGetBanksDetailsListByAccountParams): Observable<BankingDetails[]> {
    return this._api.accountsGetBanksDetailsListByAccount(accountsGetBanksDetailsListByAccountParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptBankingDetailsToUI(item)))
    );
  }

  accountsGetCommissionByQuotation(params: AccountsGetCommissionByQuotationParams): Observable<number> {
    return this._api.accountsGetCommissionByQuotation(accountsGetCommissionByQuotationParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  accountsGetCommissionByTrade(params: AccountsGetCommissionByTradeParams): Observable<number> {
    return this._api.accountsGetCommissionByTrade(accountsGetCommissionByTradeParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  accountsGetDocumentsByAccount(params: AccountsGetDocumentsByAccountParams): Observable<FinDocument[]> {
    return this._api.accountsGetDocumentsByAccount(accountsGetDocumentsByAccountParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptFinDocumentToUI(item)))
    );
  }

  accountsGetExternalUserInfo(params?: AccountsGetExternalUserInfoParams): Observable<ExternalUserInfoAlt> {
    return this._api.accountsGetExternalUserInfo(accountsGetExternalUserInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptExternalUserInfoAltToUI(res?.data))
    );
  }

  accountsGetLotCommissionByLot(params: AccountsGetLotCommissionByLotParams): Observable<number> {
    return this._api.accountsGetLotCommissionByLot(accountsGetLotCommissionByLotParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  accountsGetLotCommissionByQuotation(params: AccountsGetLotCommissionByQuotationParams): Observable<number> {
    return this._api.accountsGetLotCommissionByQuotation(accountsGetLotCommissionByQuotationParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  accountsGetLotCommissionInternal(params: AccountsGetLotCommissionInternalParams): Observable<number> {
    return this._api.accountsGetLotCommissionInternal(accountsGetLotCommissionInternalParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  accountsGetMyAccounts(params?: AccountsGetMyAccountsParams): Observable<Account[]> {
    return this._api.accountsGetMyAccounts(accountsGetMyAccountsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptAccountToUI(item)))
    );
  }

  accountsGetTransaction(params: AccountsGetTransactionParams): Observable<Transaction> {
    return this._api.accountsGetTransaction(accountsGetTransactionParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTransactionToUI(res?.data))
    );
  }

  accountsGetTransactionsByAccount(params: AccountsGetTransactionsByAccountParams): Observable<TransactionShort[]> {
    return this._api.accountsGetTransactionsByAccount(accountsGetTransactionsByAccountParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptTransactionShortToUI(item)))
    );
  }

}
