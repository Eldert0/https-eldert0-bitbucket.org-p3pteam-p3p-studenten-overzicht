using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Script.Serialization;




public class Data
{
	public string status;
    public string url;
    public int width;
    public int height;
}


 public class PhotoInfo
{

      

    public string StatusVal = "";
    public string UrlVal = "";
    public int WidthVal = 0;
    public int HeightVal = 0;
    

    public PhotoInfo(Data data)
    {
        StatusVal  = data.status;
        UrlVal = data.url;
        WidthVal = data.width;
        HeightVal = data.height;
    }


    public string ReturnJson()
    {

        var obj = new Data
        {
            status = StatusVal,
            url = UrlVal,
            width = WidthVal,
            height = HeightVal
            
        };


       return new JavaScriptSerializer().Serialize(obj);
    }

}