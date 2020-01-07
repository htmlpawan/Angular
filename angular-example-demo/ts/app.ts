import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title="Weclome to angular";
  name='Template';
  heading='Heading';
  paragraph='paragraph';
  status='Enable';
  toggled=true;
  viewMode='step2';
  tab='tab2';
  switchtab='switch1';
  toggleshowhide='Show';
  show=true;
  customName='Nitesh';
  siteUrl='window.location.href';
  myId="testId";
  isDisabled=true; 
  successClass="text-success";
  hasError=true;
  isSpecial=true;
  messageClasses={
    'text-success':!this.hasError,
    'text-danger':this.hasError,
    'text-special':this.isSpecial
  };
  hasmark=false;
  highlightcolor="orange";
  titleStyles={
    color:'blue',
    fontStyle:'italic'
  };
  greeting="";
  fieldinput:string;
  displayName=true;
  color="pink";
  specialName="Vishwas";
  public message ='';

  colors=['red','orange','silver','cyan','pink']

  // TEMPLATE REFERNCE VARIABLES
  logMsg(value){
    console.log(value);
  }

  // EVENT BINDING
  onClickme(event){
    console.log(event);
    this.greeting = event.type;
  }

  // GREET USER
  greetuser(){
    return "Hello " + this.customName;
  }

  // START NG SHOW AND HIDE
  btntoggle(){
    this.show = !this.show;
    if(this.show){
      this.toggleshowhide = 'Show';
    }
    else{
      this.toggleshowhide = 'Hide';
    }
  }

  
  /* START CLICK AND SWITCH STEP TABBED */
  onSwitch(check){
    switch(check){
    case 1 : return 'switch1';
    case 2 : return 'switch2';
    case 3 : return 'switch3';
    }
  }
  onClick(check){
    if(check==1){
      this.tab = 'tab1';
    }
    else if(check==2){
      this.tab = 'tab2';
    }
    else{
      this.tab = 'tab3';
    }
  }

  // LIST PEOPLE NEW PERSON
  listpeople=['Nitesh','Pawan','Ganesh']

  btnaddnewperson(){
    var newPerson = prompt("Name someone");
    this.listpeople.push(newPerson);
  }

  // TOGGLED ENABLE (GREEN) AND DISABLE (RED)
  enabledisable(){
    this.toggled = !this.toggled;
    this.status = this.toggled ? 'Enable' : 'Disable';
  }

  // TABLE DATA
  tables:any[]=[
    {
      name:"Nitesh Khatri",
      jobLocation:"India",
    },
    {
      name:"Sameet Khatri",
      jobLocation:"USA",
    },
    {
      name:"Mayur Khatri",
      jobLocation:"Dubai",
    },
  ]

  // LIST BULLET PERSON PEOPLE
  getColor(country){
    switch(country){
      case "India": return "orange";
      case "USA": return "red";
      case "Dubai": return "darkgreen";
    }
  }
  people:any[]=[
    {
      name:"Nitesh Khatri",
      country:"India",
    },
    {
      name:"Sameet Khatri",
      country:"USA",
    },
    {
      name:"Mayur Khatri",
      country:"Dubai",
    },
  ]

  // PRODUCT CARD
  products:any[]=[
    {
      title:"Nitesh Khatri",
      desc:"This is a paragraph.",
    },
    {
      title:"Sameet Khatri",
      desc:"This is a paragraph.",
    },
    {
      title:"Mayur Khatri",
      desc:"This is a paragraph.",
    },
  ]
}
