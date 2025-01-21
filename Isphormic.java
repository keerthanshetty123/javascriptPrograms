import java.util.HashMap;
  public class Isphormic
  {
        public static void main(String[] args) {
        String str1="egg";
        String str2="flo";
        System.out.print(IsIsphormic(str1,str2));
       
    }
    public static  boolean IsIsphormic(String s,String t)
    {
       HashMap<Character,Character> mapinfo=new HashMap<>();
       if(s.length()!=t.length())
       {
           return false;
       }
       else{
       for(int i=0;i<s.length();i++)
       {
          char str1=s.charAt(i);
          char str2=t.charAt(i);
          if(mapinfo.containsKey(str1))
          {
              
              if(mapinfo.get(str1)!=str2)
              {
                  return false;
              }
              
          }
          else{
              mapinfo.put(str1,str2);
          }
        
    }

  }
  return true;
  }
}