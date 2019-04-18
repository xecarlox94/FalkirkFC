import { NgModule } from "@angular/core";
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { FrequentQuestionsAskedComponent } from './frequent-questions-asked/frequent-questions-asked.component';


@NgModule({
    declarations: [
        AboutUsComponent,
        ContactUsComponent,
        CookiePolicyComponent,
        FrequentQuestionsAskedComponent
    ]
})


export class InstituitionModule { }