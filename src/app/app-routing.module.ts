import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsLandingPageComponent } from "./products/products-landing-page/products-landing-page.component";
import { ProductsLandingPageModule } from "./products/products-landing-page/products-landing-page.module";

const routes: Routes = [{
    path: 'products',
    component: ProductsLandingPageComponent,
    data: {title: 'Products'}
}, {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
},];

@NgModule({
    imports: [RouterModule.forRoot(routes), ProductsLandingPageModule],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
