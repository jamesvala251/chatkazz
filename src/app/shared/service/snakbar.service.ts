import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnakbarService {
    constructor(
        private snackBar: MatSnackBar
    ) {
    }

    public success(message) {
        this.snackBar.open(message, 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['green-snackbar']
        });
    }

    public error(message) {
        this.snackBar.open(message, 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['red-snackbar']
        });
    }
}
