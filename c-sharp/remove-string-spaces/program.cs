using System;
using System.Collections.Generic;

namespace Solution 
{
  public static class SpacesRemover
  {
    public static string NoSpace(string input)
    {
       var noSpaces = input.Split(" ");
       var result = String.Join("", noSpaces);
       return result;
    }  
  }
}