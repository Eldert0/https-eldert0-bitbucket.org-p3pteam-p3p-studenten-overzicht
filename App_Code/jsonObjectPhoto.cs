using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Script.Serialization;
    

public class Data
{
	public string Status;
    public string Url;
    public int Width;
    public int Height;
}


 public class PhotoInfo
{
    public string StatusVal = "";
    public string UrlVal = "";
    public int WidthVal = 0;
    public int HeightVal = 0;
    

    public PhotoInfo(Data data)
    {
        StatusVal  = data.Status;
        UrlVal = "~/"+data.Url;
        WidthVal = data.Width;
        HeightVal = data.Height;
    }


    public string ReturnJson()
    {

        var obj = new Data
        {
            Status = StatusVal,
            Url = UrlVal,
            Width = WidthVal,
            Height = HeightVal
            
        };


       return new JavaScriptSerializer().Serialize(obj);
    }

}