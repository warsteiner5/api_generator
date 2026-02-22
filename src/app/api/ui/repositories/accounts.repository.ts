import { Account } from '../models/account.interface';
import { accountAdapter } from '../adapters/models/account.adapter';
import { AccountsApiService } from '../../swagger/services/accounts-api.service';
import { AccountsCreateBanksDetailsByAccountParams, accountsCreateBanksDetailsByAccountAdapter } from './params/accounts-create-banks-details-by-account.params';
import { AccountsEditBanksDetailsByAccountParams, accountsEditBanksDetailsByAccountAdapter } from './params/accounts-edit-banks-details-by-account.params';
import { AccountsExportTransactionToExcelParams, accountsExportTransactionToExcelAdapter } from './params/accounts-export-transaction-to-excel.params';
import { AccountsGetAccountRefillDocumentParams, accountsGetAccountRefillDocumentAdapter } from './params/accounts-get-account-refill-document.params';
import { AccountsGetAccountRefillHtmlDocumentParams, accountsGetAccountRefillHtmlDocumentAdapter } from './params/accounts-get-account-refill-html-document.params';
import { AccountsGetBanksDetailsByAccountParams, accountsGetBanksDetailsByAccountAdapter } from './params/accounts-get-banks-details-by-account.params';
import { AccountsGetBanksDetailsListByAccountParams, accountsGetBanksDetailsListByAccountAdapter } from './params/accounts-get-banks-details-list-by-account.params';
import { AccountsGetCommissionByQuotationParams, accountsGetCommissionByQuotationAdapter } from './params/accounts-get-commission-by-quotation.params';
import { AccountsGetCommissionByTradeParams, accountsGetCommissionByTradeAdapter } from './params/accounts-get-commission-by-trade.params';
import { AccountsGetDocumentsByAccountParams, accountsGetDocumentsByAccountAdapter } from './params/accounts-get-documents-by-account.params';
import { AccountsGetExternalUserInfoParams, accountsGetExternalUserInfoAdapter } from './params/accounts-get-external-user-info.params';
import { AccountsGetLotCommissionByLotParams, accountsGetLotCommissionByLotAdapter } from './params/accounts-get-lot-commission-by-lot.params';
import { AccountsGetLotCommissionByQuotationParams, accountsGetLotCommissionByQuotationAdapter } from './params/accounts-get-lot-commission-by-quotation.params';
import { AccountsGetLotCommissionInternalParams, accountsGetLotCommissionInternalAdapter } from './params/accounts-get-lot-commission-internal.params';
import { AccountsGetMyAccountsParams, accountsGetMyAccountsAdapter } from './params/accounts-get-my-accounts.params';
import { AccountsGetTransactionParams, accountsGetTransactionAdapter } from './params/accounts-get-transaction.params';
import { AccountsGetTransactionsByAccountParams, accountsGetTransactionsByAccountAdapter } from './params/accounts-get-transactions-by-account.params';
import { BankingDetails } from '../models/banking-details.interface';
import { bankingDetailsAdapter } from '../adapters/models/banking-details.adapter';
import { ExternalUserInfoAlt } from '../models/external-user-info-alt.interface';
import { externalUserInfoAltAdapter } from '../adapters/models/external-user-info-alt.adapter';
import { FinDocument } from '../models/fin-document.interface';
import { finDocumentAdapter } from '../adapters/models/fin-document.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.interface';
import { transactionAdapter } from '../adapters/models/transaction.adapter';
import { TransactionShort } from '../models/transaction-short.interface';
import { transactionShortAdapter } from '../adapters/models/transaction-short.adapter';

@Injectable({ providedIn: 'root' })
export class AccountsRepository {
  private readonly _api = inject(AccountsApiService);

  accountsCreateBanksDetailsByAccount(params: AccountsCreateBanksDetailsByAccountParams): Observable<number> {
    return this._api.accountsCreateBanksDetailsByAccount(accountsCreateBanksDetailsByAccountAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  accountsEditBanksDetailsByAccount(params: AccountsEditBanksDetailsByAccountParams): Observable<number> {
    return this._api.accountsEditBanksDetailsByAccount(accountsEditBanksDetailsByAccountAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  accountsExportTransactionToExcel(params: AccountsExportTransactionToExcelParams): Observable<Blob> {
    return this._api.accountsExportTransactionToExcel(accountsExportTransactionToExcelAdapter(params));
  }

  accountsGetAccountRefillDocument(params: AccountsGetAccountRefillDocumentParams): Observable<Blob> {
    return this._api.accountsGetAccountRefillDocument(accountsGetAccountRefillDocumentAdapter(params));
  }

  accountsGetAccountRefillHtmlDocument(params: AccountsGetAccountRefillHtmlDocumentParams): Observable<string> {
    return this._api.accountsGetAccountRefillHtmlDocument(accountsGetAccountRefillHtmlDocumentAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  accountsGetBanksDetailsByAccount(params: AccountsGetBanksDetailsByAccountParams): Observable<BankingDetails> {
    return this._api.accountsGetBanksDetailsByAccount(accountsGetBanksDetailsByAccountAdapter(params)).pipe(
      map((res) => bankingDetailsAdapter(res?.data))
    );
  }

  accountsGetBanksDetailsListByAccount(params: AccountsGetBanksDetailsListByAccountParams): Observable<BankingDetails[]> {
    return this._api.accountsGetBanksDetailsListByAccount(accountsGetBanksDetailsListByAccountAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => bankingDetailsAdapter(item)))
    );
  }

  accountsGetCommissionByQuotation(params: AccountsGetCommissionByQuotationParams): Observable<number> {
    return this._api.accountsGetCommissionByQuotation(accountsGetCommissionByQuotationAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  accountsGetCommissionByTrade(params: AccountsGetCommissionByTradeParams): Observable<number> {
    return this._api.accountsGetCommissionByTrade(accountsGetCommissionByTradeAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  accountsGetDocumentsByAccount(params: AccountsGetDocumentsByAccountParams): Observable<FinDocument[]> {
    return this._api.accountsGetDocumentsByAccount(accountsGetDocumentsByAccountAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => finDocumentAdapter(item)))
    );
  }

  accountsGetExternalUserInfo(params?: AccountsGetExternalUserInfoParams): Observable<ExternalUserInfoAlt> {
    return this._api.accountsGetExternalUserInfo(accountsGetExternalUserInfoAdapter(params)).pipe(
      map((res) => externalUserInfoAltAdapter(res?.data))
    );
  }

  accountsGetLotCommissionByLot(params: AccountsGetLotCommissionByLotParams): Observable<number> {
    return this._api.accountsGetLotCommissionByLot(accountsGetLotCommissionByLotAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  accountsGetLotCommissionByQuotation(params: AccountsGetLotCommissionByQuotationParams): Observable<number> {
    return this._api.accountsGetLotCommissionByQuotation(accountsGetLotCommissionByQuotationAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  accountsGetLotCommissionInternal(params: AccountsGetLotCommissionInternalParams): Observable<number> {
    return this._api.accountsGetLotCommissionInternal(accountsGetLotCommissionInternalAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  accountsGetMyAccounts(params?: AccountsGetMyAccountsParams): Observable<Account[]> {
    return this._api.accountsGetMyAccounts(accountsGetMyAccountsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => accountAdapter(item)))
    );
  }

  accountsGetTransaction(params: AccountsGetTransactionParams): Observable<Transaction> {
    return this._api.accountsGetTransaction(accountsGetTransactionAdapter(params)).pipe(
      map((res) => transactionAdapter(res?.data))
    );
  }

  accountsGetTransactionsByAccount(params: AccountsGetTransactionsByAccountParams): Observable<TransactionShort[]> {
    return this._api.accountsGetTransactionsByAccount(accountsGetTransactionsByAccountAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => transactionShortAdapter(item)))
    );
  }

}
