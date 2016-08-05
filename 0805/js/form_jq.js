// JavaScript Document
$('.reg_cont :text,.reg_cont textarea,.search input').focus(function(){
if(!this.initValue){
this.initValue = this.value;
} 
if(this.value === this.initValue){
this.value = ''; 
}
}).blur(function(){
if(this.value === '' || this.value === null){
this.value = this.initValue; 
 } 
}); 

