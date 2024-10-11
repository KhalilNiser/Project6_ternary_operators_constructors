//              ---- VOTING_AGE_COMPARISON_FUNCTION ----
function voteableAgeComparison()
{
    /**                 ---- LET_VARIABLES ----
     * Declare "let" variables: These are block-scoped variables. These
     * variables can only Exist (to be used) within this block/function.
    */              
    let userAge;
    let age;
 
    /**
     * instruct the user to enter his/her age as an "int".
     * If, users data is not a number. Display this message.
     */
     if ( isNaN( age ) )
     {
         userAge = "Invalid Entry! ";
     }
     else
     {
        // Assign the user's "age" value to the variable "age". 
         age = document.getElementById( "age" ).value;
         /**
          * If, voteableAge, is under 18. Output String following 
          * the "question mark (?) char", is displayed. Else, 
          * output String following the "colon (:) char" is displayed
          */
         userAge =  ( age < 18 ) ? "Too young. " : "Old enough. ";
     }
 
     document.getElementById( "ageId" ).innerHTML = userAge + "To Vote!";
} 
//              ---- END_VOTING_AGE_COMPARISON ----
//              ---- KEYWORDS_VARIABLES_CONSTRUCTORS ----
// Function and parameters
function vehicleChoice( make, model, year, color )
{
    this.vehicleMake = make;
    this.vehicleModel = model;
    this.vehicleYear = year;
    this.vehicleColor = color;
}

const Christina = new vehicleChoice( "Tesla", "Model_X Luxury SUV", 2024, "Black" );
const Emily = new vehicleChoice( "Jeep", "Cherokee Trail Hawk", 2024, "White and Black" );
const Khalil = new vehicleChoice( "Ford", "Hennessey F-150 VelociRaptor R_1000 4X4", 2024, 
"Black" );

    document.getElementById( "new_and_this" ).innerHTML = "Christina Drives a " + 
    Christina.vehicleColor + " Colored, " + vehicleYear + ", " + vehicleModel; 
//              ---- END_KEYWORDS_VARIABLES_CONSTRUCTORS ----
//              ----END_VOTING_AGE_COMPARISON ----



//              ---- NESTED_FUNCTION ----
function functionCount()
{
    document.getElementById( "nested-function" ).innerHTML = count();

    function count()
    {
        var startingPoint = 9;

        function plusOne() { starting = starting + 1; }

        plusOne();

        return startingPoint;

    }
}





