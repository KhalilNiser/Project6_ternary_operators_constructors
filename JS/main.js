//              ---- TERNARY_OPERATOR ----
//              ---- VOTING_AGE_COMPARISON_FUNCTION ----
function voteableAgeComparison()
{
    /**                 ---- LET_VARIABLES ----
     * Declare "let" variables: These are block-scoped variables. These
     * variables can only Exist (to be used) within this block/function.
    */              
    let userAge;
    let age = document.getElementById("age").value;
 
    /**
     * instruct the user to enter his/her age as an "int".
     * If, users data is not a number. Display this message.
     */
     if ( isNaN( age ) )
     {
         userAge = "Please Use Whole Numbers! ";
     }
     else
     {
        // Assign the user's "age" value to the variable "age". 
        //  age = document.getElementById( "age" ).value;
         /**
          * If, voteableAge, is under 18. Output String following 
          * the "question mark (?) char", is displayed. Else, 
          * output String following the "colon (:) char" is displayed
          */
         userAge =  ( age < 18 ) ? "Too young. " : "Old enough. ";
     }
 
     document.getElementById( "ageId" ).innerHTML = userAge + "To Vote!";
} 
//              ---- END_TERNARY_OPERATOR ----
//              ---- END_VOTING_AGE_COMPARISON ----


//              ---- CONSTRUCTOR ----
//              ---- CAR_CLASS ----

    function vehicle( make, model, year, color )
    {
        this.vehicleMake = make;
        this.vehicleModel = model;
        this.vehicleYear = year;
        this.vehicleColor = color;
    }   

    var carOne = new vehicle( "Tesla", "Model_X Luxury SUV", 2024, "Black" );
    var carTwo = new vehicle( "Jeep", "Cherokee Trail Hawk", 2024, "White and Black" );
    var carThree = new vehicle( "Ford", "Hennessey F-150 VelociRaptor R_1000 4X4", 2024, 
"Black" );

    function vehicleChoice()
    {
        
    document.getElementById( "new-this-const" ).innerHTML = "In my opinion the" + 
    carThree.vehicleModel + " was the most Capable and the most powerfull,<br>truck on the"
    + "planet. Not to mention it's Luxury and Intimidating appearance makes it even " + 
    "more appealing. And now the " + carThree.vehicleYear + ", just got even better.";
    } 
//              ---- END_KEYWORDS_VARIABLES_CONSTRUCTORS ----
//              ----END_VOTING_AGE_COMPARISON ----



//              ---- NESTED_FUNCTION ----
function functionCount()
{

    var startingPoint = 9;

    function count()
    {

        var result = startingPoint += 1;

        document.getElementById( "nested-function" ).innerHTML = result;


    }

    count();

}





