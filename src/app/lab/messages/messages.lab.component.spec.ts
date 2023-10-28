import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MessagesComponentForLab } from "./messages.lab.component";
import { MessageService } from "src/app/services/message/message.service";
import { By } from "@angular/platform-browser";


describe("2-message component integration testing:", () => {
    let component : MessagesComponentForLab;
    let fixture : ComponentFixture <MessagesComponentForLab>;
  
    beforeEach(()=>{

        TestBed.configureTestingModule({
            declarations:[MessagesComponentForLab],
            providers: [MessageService],
        });
        fixture = TestBed.createComponent (MessagesComponentForLab);
        component= fixture.componentInstance;
        
    });
   
    it("expect comp. created successfully", () => { 
        expect (component).toBeTruthy();
    })
    it("expect component template to be empty", () => {
        //Note: there is *ngIf="messageService.messages.length" in line 1 in template
        expect(component.messageService.messages.length).toBe(0);
    });

    it("then expect div.msg to have the messages after setting it", () => {

        component.messageService.add('message 1');
        component.messageService.add('message 2');
        component.messageService.add('message 3');
        fixture.detectChanges();
    
        const divs = fixture.debugElement.queryAll(By.css('.msg'));
        expect(divs.length).toBe(3);
});

});




  


  

  