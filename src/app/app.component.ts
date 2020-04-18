import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  serverElements = [{type:"server", name: "other", content: "content"}];

  ngOnInit(){
    console.log('ngOnInit',this.serverElements)
  }

  
  onServerAdded( serverData: { serverName:string, serverContent:string} ) {
    this.serverElements.push({
      type: "server",
      name:serverData.serverName,
      content: serverData.serverContent
    })
    console.log('onServerAdded app.components.ts, LINE 22', this.serverElements)
  }

  onBlueprintAdded(blueprintData: { serverName:string, serverContent:string}){
    this.serverElements.push({
      type: "server",
      name:blueprintData.serverName,
      content: blueprintData.serverContent
    })

  }
  

  
  

}
