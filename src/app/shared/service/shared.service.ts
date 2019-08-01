import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    message = new EventEmitter<any>();
} 