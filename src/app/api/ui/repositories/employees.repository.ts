import { Employee } from '../models/employee.interface';
import { employeeAdapter } from '../adapters/models/employee.adapter';
import { EmployeeDataToSign } from '../models/employee-data-to-sign.interface';
import { employeeDataToSignAdapter } from '../adapters/models/employee-data-to-sign.adapter';
import { EmployeeItem } from '../models/employee-item.interface';
import { EmployeesApiService } from '../../swagger/services/employees-api.service';
import { EmployeesBlockParams, employeesBlockAdapter } from './params/employees-block.params';
import { EmployeesGetEmployeeDataToSignParams, employeesGetEmployeeDataToSignAdapter } from './params/employees-get-employee-data-to-sign.params';
import { EmployeesGetParams, employeesGetAdapter } from './params/employees-get.params';
import { EmployeesSearchParams, employeesSearchAdapter } from './params/employees-search.params';
import { EmployeesSelfParams, employeesSelfAdapter } from './params/employees-self.params';
import { EmployeesUnblockParams, employeesUnblockAdapter } from './params/employees-unblock.params';
import { EmployeesUpdateParams, employeesUpdateAdapter } from './params/employees-update.params';
import { EmployeesUpdateSignedEmployeeParams, employeesUpdateSignedEmployeeAdapter } from './params/employees-update-signed-employee.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfEmployeeItemAdapter } from '../adapters/models/market-pagination-result-of-list-of-employee-item.adapter';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmployeesRepository {
  private readonly _api = inject(EmployeesApiService);

  employeesBlock(params: EmployeesBlockParams): Observable<void> {
    return this._api.employeesBlock(employeesBlockAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  employeesGet(params: EmployeesGetParams): Observable<Employee> {
    return this._api.employeesGet(employeesGetAdapter(params)).pipe(
      map((res) => employeeAdapter(res?.data))
    );
  }

  employeesGetEmployeeDataToSign(params: EmployeesGetEmployeeDataToSignParams): Observable<EmployeeDataToSign> {
    return this._api.employeesGetEmployeeDataToSign(employeesGetEmployeeDataToSignAdapter(params)).pipe(
      map((res) => employeeDataToSignAdapter(res?.data))
    );
  }

  employeesSearch(params?: EmployeesSearchParams): Observable<MarketPaginationResult<EmployeeItem[]>> {
    return this._api.employeesSearch(employeesSearchAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfEmployeeItemAdapter(res?.data))
    );
  }

  employeesSelf(params?: EmployeesSelfParams): Observable<Employee> {
    return this._api.employeesSelf(employeesSelfAdapter(params)).pipe(
      map((res) => employeeAdapter(res?.data))
    );
  }

  employeesUnblock(params: EmployeesUnblockParams): Observable<void> {
    return this._api.employeesUnblock(employeesUnblockAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  employeesUpdate(params: EmployeesUpdateParams): Observable<void> {
    return this._api.employeesUpdate(employeesUpdateAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  employeesUpdateSignedEmployee(params: EmployeesUpdateSignedEmployeeParams): Observable<boolean> {
    return this._api.employeesUpdateSignedEmployee(employeesUpdateSignedEmployeeAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

}
