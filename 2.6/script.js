function upper_case(str)
{
   regexp = /^[A-Z]/;
   if (regexp.test(str))
    {
      document.write("1st letter is uppercase");
    } 
    else
    {
      document.write("1st letter isn't uppercase" + "<br />");
    }
}
upper_case('smile');
upper_case('Smile');