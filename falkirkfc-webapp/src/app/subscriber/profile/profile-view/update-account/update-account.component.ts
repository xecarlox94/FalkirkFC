import { Component, OnInit, AfterViewChecked, Output, EventEmitter } from '@angular/core';
import { UserAuthService } from 'src/app/core/services/users/user-auth.service';


declare let paypal: any;

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.scss']
})

export class UpdateAccountComponent implements OnInit, AfterViewChecked {
  @Output() upgradeDone: EventEmitter<void> = new EventEmitter<void>();
  userAuthService: UserAuthService;
  addScript: boolean = false;
  amount: number;

  constructor(userAuthSrv: UserAuthService) {
    this.userAuthService = userAuthSrv;
  }

  ngOnInit() {
  }

  
  ngAfterViewChecked(): void {
    if(!this.addScript && this.amount !== undefined){
      this.addPaypalScript().then( () => {
        paypal.Button.render(this.getPaypalConfig(), '#paypal-button')
        this.userAuthService.upgradeCurrentUser().then( () => this.upgradeDone.emit() )
      })
    }
  }
  
  addPaypalScript() {
    return new Promise( (resolve, reject) => {
      let scriptTag = document.createElement("script");
      scriptTag.src = "https://www.paypalobjects.com/api/checkout.js";
      this.addScript = true;
      scriptTag.onload = resolve;
      document.body.appendChild(scriptTag);
    })
  }
  
  getPaypalConfig() {
    return {
      // Configure environment
      env: 'sandbox',
      client: {
        sandbox: 'AbD3_Z5mNgmb_chYadJfFnez-PeHemLdB5NuU8oFOpaVtAywf7Eyn2Mwm-v0x84yU9JjrcZFOnmRbOMV',
        production: 'demo_production_client_id'
      },
      // Customize button (optional)
      locale: 'en_GB',
      style: {
        size: 'medium',
        color: 'blue',
        shape: 'rect',
      },
  
      // Enable Pay Now checkout flow (optional)
      commit: true,
  
      // Set up a payment
      payment(data, actions) {
        return actions.payment.create({
          transactions: [{
            amount: {
              total: "0.01",
              currency: 'GBP'
            }
          }]
        });
      },
      // Execute the payment
      onAuthorize(data, actions) {
        return actions.payment.execute()
                      .then( (payment) => {
                        console.log("payment done")
                      });
      }
    }
  }

}
