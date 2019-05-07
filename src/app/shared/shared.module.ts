import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BidiModule } from '@angular/cdk/bidi';
import {
    MAT_DIALOG_DEFAULT_OPTIONS,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
} from '@angular/material';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { SnakbarService } from './service/snakbar.service';
import { SharedService } from './service/shared.service';
import { StorageService } from './service/storage.service';
import { InterceptorService } from './service/interceptor.service';
import { HttpClientService, httpClientServiceCreator } from './service/httpclient.service';
import { Ng2Webstorage } from 'ngx-webstorage';
import { AuthGuardService, AgencyAuthGuardService, AuthGuardChildService, AgencyAuthGuardChildService } from './service/auth-guard.service';
import { PhonePipe } from './pipes/phone.pipe';
import { IsNumberDirective, EqualValidator, PasswordValidator, EmailValidator } from './directives/validation.directive';
import { CdkTableModule } from '@angular/cdk/table';
import { GenderPipe } from './pipes/gender.pipe';
import { ExcelService } from './service/excelService';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
};

@NgModule({
    imports: [
        Ng2Webstorage,
        HttpClientModule,
        CustomFormsModule,
        MatInputModule,
        MatSidenavModule,
        MatCardModule,
        MatMenuModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatListModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatProgressBarModule,
        FlexLayoutModule,
        LoadingBarRouterModule,
        BidiModule,
        PerfectScrollbarModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSortModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        CdkTableModule,
        NgxMaterialTimepickerModule.forRoot()
    ],
    declarations: [
        PhonePipe,
        IsNumberDirective,
        EqualValidator,
        PasswordValidator,
        EmailValidator,
        GenderPipe
    ],
    providers: [
        SharedService,
        StorageService,
        InterceptorService,
        SnakbarService,
        AuthGuardService,
        AgencyAuthGuardService,
        AuthGuardChildService,
        AgencyAuthGuardChildService,
        ExcelService,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {
            provide: MAT_DIALOG_DEFAULT_OPTIONS,
            useValue: { hasBackdrop: false }
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        },
        {
            provide: HttpClientService,
            useFactory: httpClientServiceCreator,
            deps: [HttpClient]
        }
    ],
    exports: [
        FormsModule,
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatSidenavModule,
        MatCardModule,
        MatMenuModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatListModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatProgressBarModule,
        FlexLayoutModule,
        LoadingBarRouterModule,
        BidiModule,
        PerfectScrollbarModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSortModule,
        MatProgressSpinnerModule,
        PhonePipe,
        IsNumberDirective,
        EqualValidator,
        PasswordValidator,
        EmailValidator,
        CdkTableModule,
        NgxMaterialTimepickerModule,
        GenderPipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule { }
