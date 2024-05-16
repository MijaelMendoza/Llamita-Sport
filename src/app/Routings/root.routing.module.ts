import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { AccountComponent } from '../components/account/account.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { CartComponent } from '../components/cart/cart.component';
const appRootRoutes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'home/:id',
        component: CheckoutComponent
    },
    {
        path: 'home/cart/items',
        component: CartComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];

@NgModule({

    declarations: [],
    imports: [RouterModule.forRoot(appRootRoutes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
})
export class AppRootRoutingModule {

}
