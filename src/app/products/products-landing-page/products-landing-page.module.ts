import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from "../../shared/common-ui/button/button.module";
import { ProductsLandingPageComponent } from "./products-landing-page.component";

@NgModule({
    declarations: [ProductsLandingPageComponent],
    imports: [
        CommonModule,
        ButtonModule
    ]
})
export class ProductsLandingPageModule {
}
