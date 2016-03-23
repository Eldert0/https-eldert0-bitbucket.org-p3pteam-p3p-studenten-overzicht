using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.OleDb;
using System.Data.SqlClient;
using System.Web;
using WebMatrix.Data;



/// <summary>
/// Summary description for ExcelToDb
/// </summary>
/// 
class Student
{
    public string   Groep { get; set; }
    public string   mentor  { get; set; }
    public string     studentnummer { get; set; }
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
    public string datumvan { get; set; }
    public string datumtot    { get; set; }
    public string aankomstBijIsatcode { get; set; }
    public string aanmeldingdatum { get; set; }
    public string datumdefinitief { get; set; }


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
        //Create connection string to Excel work book
        string excelConnectionString = @"Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + path + ";Extended Properties=Excel 12.0;Persist Security Info=False";
        
        //Create Connection to Excel work book
        OleDbConnection excelConnection = new OleDbConnection(excelConnectionString);
        
        //Create OleDbCommand to fetch data from Excel
        OleDbCommand cmd = new OleDbCommand("select [groep],[mentor],[studentnummer],[roepnaam],[voorvoegsels],[naam],[geslacht],[geboortedatum],[vooropleiding],[emailprive],[emailinstelling],[adrestype],[etiketnaam],[etiketregel1],[etiketregel2],[land],[telefoonlandnummer],[telefoonnummer],[telefoonnummermobiel],[herinschrijving],[opleiding],[fase],[datumvan],[datumtot],[aankomst bij isatcode],[aanmeldingdatum],[datumdefinitief] from [sheet1$]", excelConnection);
        
        excelConnection.Open();
        OleDbDataReader dReader;
        dReader = cmd.ExecuteReader();
                
        List<Student> StudentList = new List<Student>();

        // Reading the data from excel into the list
        while (dReader.Read())
        {
            Student data = new Student();

            data.Groep = (string)dReader["groep"];
            data.mentor = (string)dReader["mentor"];
            data.studentnummer =Convert.ToString(dReader["studentnummer"]);
            data.roepnaam = (string)dReader["roepnaam"];
            data.voorvoegsels = (string)dReader["voorvoegsels"];
            data.naam = (string)dReader["naam"];
            data.geslacht = (string)dReader["geslacht"];
            data.geboortedatum = Convert.ToString(dReader["geboortedatum"]);
            data.vooropleiding = (string)dReader["vooropleiding"];
            data.emailprive = (string)dReader["emailprive"];
            data.emailinstelling = (string)dReader["emailinstelling"];
            data.adrestype = (string)dReader["adrestype"];
            data.etiketnaam = (string)dReader["etiketnaam"];
            data.etiketregel1 = (string)dReader["etiketregel1"];
            data.etiketregel2 = (string)dReader["etiketregel2"];
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

            data.telefoonlandnummer = Convert.ToString(dReader["telefoonlandnummer"]);
            data.telefoonnummer = Convert.ToString(dReader["telefoonnummer"]);
            data.telefoonnummermobiel = Convert.ToString(dReader["telefoonnummermobiel"]);
            data.herinschrijving = Convert.ToString(dReader["herinschrijving"]);
            data.opleiding = Convert.ToString(dReader["opleiding"]);
            data.fase = Convert.ToString(dReader["fase"]);
            data.datumvan = Convert.ToString(dReader["datumvan"]);
            data.datumtot = Convert.ToString(dReader["datumtot"]);
            data.aankomstBijIsatcode = Convert.ToString(dReader["aankomst bij isatcode"]);
            data.aanmeldingdatum = Convert.ToString(dReader["aanmeldingdatum"]);
            data.datumdefinitief = Convert.ToString(dReader["datumdefinitief"]);

            StudentList.Add(data);
        }

        // Insert all the data from the sheet in the db
        
        var db = Database.Open("database");

        foreach(Student s in StudentList)
        {
            var query = "INSERT INTO Students (groep, mentor, studentnummer, roepnaam, voorvoegsels, naam, geslacht, geboortedatum, vooropleiding, emailprive, emailinstelling, adrestype, etiketnaam, etiketregel1, etiketregel2, land, telefoonlandnummer, telefoonnummermobiel, herinschrijving, opleiding, fase, datumvan, datumtot, aanmeldingdatum, datumdefinitief, telefoonnummer, aankomst_bij_isatcode) VALUES(@0, @1, @2, @3, @4, @5, @6, @7, @8, @9, @10, @11, @12, @13, @14, @15, @16, @17, @18, @19, @20, @21, @22, @23, @24, @25, @26)";
            db.Execute(query, s.Groep, s.mentor, s.studentnummer, s.roepnaam, s.voorvoegsels, s.naam, s.geslacht, s.geboortedatum, s.vooropleiding, s.emailprive, s.emailinstelling, s.adrestype, s.etiketnaam, s.etiketregel1, s.etiketregel2, s.land, s.telefoonlandnummer, s.telefoonnummermobiel, s.herinschrijving, s.opleiding, s.fase, s.datumvan, s.datumtot, s.aanmeldingdatum, s.datumdefinitief, s.telefoonnummer, s.aankomstBijIsatcode);
        } 
            
        db.Close();
        excelConnection.Close();
    }
}

