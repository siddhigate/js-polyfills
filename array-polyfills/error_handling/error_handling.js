try
{
    var result  =  Sum(10, 20); // Sum is not defined yet
	  console.log( result );
}
catch(ex)
{
    console.log( " Exception Handle "+ex );
}
finally{ // Finally Block Always Executed
   console.log( "finally block executed" );
}
