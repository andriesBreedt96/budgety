//modules in the module pattern are just IIFEs that return objects
//returned object is accessible publically - the rest are not
var budgetController = (function(){

    var Expense = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            allExp : [],
            allInc : []
        },
        totals : {
            inc : 0,
            exp : 0
        }
    }

    return {
        addItem : function(type, desc, val){
          var newItem;


          newItem = new Expense(ID, des, val);
        }
    }

})(); 

var UIController = (function(){

    var DOMstrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue  : '.add__value',
        inputBtn : '.add__btn'
    }

    return {
        getInput: function(){
            // will be either inc or exp
            return {
                 type : document.querySelector(DOMstrings.inputType).value,
                 description : document.querySelector(DOMstrings.inputDescription).value,
                 value : document.querySelector(DOMstrings.inputValue).value
            }
        },
        
        getDOMstrings: function(){
            return DOMstrings
        }
    };

})();


var controller = (function(budgetCtrl,UICtrl){

    var setupEventListeners = function(){

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        //adding an eventlistener for the key press event
        //use event arguement to determine which key was pressed
        document.addEventListener('keypress',function(event){
          
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
    
        });
    };



    var ctrlAddItem = function(){
        //get field input data
        var input = UICtrl.getInput();

        //add item to budget controller

        //add new item to user interface

        //calculate the budget

        //display the budget
    };

    //create initialization function

    return {
        init : function(){
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();


