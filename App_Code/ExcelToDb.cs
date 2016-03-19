using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.OleDb;
using System.Data.SqlClient;
using System.Web;

/// <summary>
/// Summary description for ExcelToDb
/// </summary>
/// 
class MyData
{
    public string   Groep { get; set; }
    public string   mentor  { get; set; }
    public long     studentnummer { get; set; }
    public string   roepnaam    { get; set; }
    public string   voorvoegsels { get; set; }
    public string   naam   { get; set; }
    public string   geslacht { get; set; }
    public string   geboortedatum   { get; set; }
    public string   vooropleiding { get; set; }
    public string   emailprive  { get; set; }
    public string   emailinstelling { get; set; }
    public string   adrestype   { get; set; }
    public string   etiketnaam { get; set; }
    public string   etiketregel1 { get; set; }    
    public string   etiketregel2 { get; set; }
    public string   land { get; set; }
    public string   telefoonlandnummer { get; set; }
    public string   telefoonnummer  { get; set; }
    public string   telefoonnummermobiel { get; set; }
    public string   herinschrijving { get; set; }
    public string   opleiding { get; set; }
    public string   fase    { get; set; }
    public DateTime datumvan { get; set; }
    public DateTime datumtot    { get; set; }
    public DateTime aankomstBijIsatcode { get; set; }
    public DateTime aanmeldingdatum { get; set; }
    public DateTime datumdefinitief { get; set; }


}

public class ExcelToDb
{
    public ExcelToDb()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public void LoadeExcelToDb(string path)
    {
               // string sqlConnectionString = @"Data Source=SIETSE\SQLEXPRESS;Database=test;Trusted_Connection=true;Persist Security Info=true";
                                             

                //Create connection string to Excel work book
                string excelConnectionString = @"Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + path + ";Extended Properties=Excel 12.0;Persist Security Info=False";
                //Create Connection to Excel work book
                OleDbConnection excelConnection = new OleDbConnection(excelConnectionString);
                //Create OleDbCommand to fetch data from Excel

                OleDbCommand cmd = new OleDbCommand("select [groep],[mentor],[studentnummer],[roepnaam],[voorvoegsels],[naam],[geslacht],[geboortedatum],[vooropleiding],[emailprive],[emailinstelling],[adrestype],[etiketnaam],[etiketregel1],[etiketregel2],[land],[telefoonlandnummer],[telefoonnummer],[telefoonnummermobiel],[herinschrijving],[opleiding],[fase],[datumvan],[datumtot],[aankomst bij isatcode],[aanmeldingdatum],[datumdefinitief] from [sheet1$]", excelConnection);

                excelConnection.Open();
                OleDbDataReader dReader;
                dReader = cmd.ExecuteReader();
                
                List<MyData> list = new List<MyData>();
        while (dReader.Read())
        {
            MyData data = new MyData();

            //data.Groep = (string)dReader["groep"];
            //data.mentor = (string)dReader["mentor"];
            //data.studentnummer = Convert.ToInt64(dReader["studentnummer"]);
            //data.roepnaam = (string)dReader["roepnaam"];
            //data.voorvoegsels = (string)dReader["voorvoegsels"];
            //data.naam = (string)dReader["naam"];
            //data.geslacht = (string)dReader["geslacht"];
            //data.geboortedatum = Convert.ToString(dReader["geboortedatum"]);
            //data.vooropleiding = (string)dReader["vooropleiding"];
            //data.emailprive = (string)dReader["emailprive"];
            //data.emailinstelling = (string)dReader["emailinstelling"];
            //data.adrestype = (string)dReader["adrestype"];
            //data.etiketnaam = (string)dReader["etiketnaam"];
            //data.etiketregel1 = (string)dReader["etiketregel1"];
            //data.etiketregel2 = (string)dReader["etiketregel2"];
            if (dReader["land"] != null)
            {
                data.land = (string)dReader["land"];
            }
            else
            {
                data.land = "";
            }
            //Strings ""
            //Datum 0/0/0000 00:00:00
            //kijken naar datetime

            
            // data.telefoonlandnummer = Convert.ToString(dReader["telefoonlandnummer"]);
            //data.telefoonnummer = Convert.ToString(dReader["telefoonnummer"]);
            // data.telefoonnummermobiel = Convert.ToString(dReader["telefoonnummermobiel"]);
            //data.herinschrijving = Convert.ToString(dReader["herinschrijving"]);
            //data.opleiding = (string)dReader["opleiding"];
            //data.fase = (string)dReader["fase"];
            //data.datumvan = Convert.ToDateTime(dReader["datumvan"]);
            //data.datumtot = Convert.ToDateTime(dReader["datumtot"]);
            //data.aankomstBijIsatcode = Convert.ToDateTime(dReader["aankomst bij isatcode"]);
            //data.aanmeldingdatum = Convert.ToDateTime(dReader["aanmeldingdatum"]);
            //data.datumdefinitief = Convert.ToDateTime(dReader["datumdefinitief"]);

            list.Add(data);
                }
                


            //SqlBulkCopy sqlBulk = new SqlBulkCopy(sqlConnectionString);
            //Give your Destination table name
            //sqlBulk.DestinationTableName = "testdb";
            //sqlBulk.WriteToServer(dReader);
            excelConnection.Close();
        
    }


}

