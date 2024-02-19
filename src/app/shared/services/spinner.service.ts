import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  setIsLoading(value: boolean): void{
    this.isLoading$.next(value);
  }

  getIsLoading(): Observable<boolean>{
    return this.isLoading$ as Observable<boolean>;
  }

}
