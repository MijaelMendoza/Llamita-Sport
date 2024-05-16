import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../components/admin/admin.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { AddressComponent } from '../components/address/address.component';
import { PaymentComponent } from '../components/payment/payment.component';
import { AccountComponent } from '../components/account/account.component';
import { ProductCategoryComponent } from '../components/product-category/product-category.component';
import { DisCatProComponent } from '../components/dis-cat-pro/dis-cat-pro.component';
const accountRoutes: Routes = [
    {
        path: 'account',
        component: AccountComponent,
        children: [

            {
                path: 'admin',
                component: AdminComponent,
                children: [
                    {
                        path: 'edit',
                        component: ProductCategoryComponent
                    },
                    {
                        path: 'view',
                        component: DisCatProComponent
                    },
                    {
                        path: '',
                        component: DisCatProComponent
                    }

                ]
            },
            {
                path: 'profile',
                component: ProfileComponent,
                children: [

                ]
            },
            {
                path: 'address',
                component: AddressComponent,
                children: [

                ]
            },
            {
                path: 'payment',
                component: PaymentComponent,
                children: [

                ]
            },
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full'
            }

        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(accountRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AccountRoutingModule { }
