function OnStart()
{
  lay = app.CreateLayout( "linear", "VCenter,FillXY" );

   web = app.CreateWebView( 1,1,"IgnoreErrors");
web.SetUserAgent( "Desktop" );
   var url =  "en_US/index.html#!index.md"
   web.LoadUrl( url );
 
   lay.AddChild( web );

   app.AddLayout( lay );

}