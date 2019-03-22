//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace WebAppEmberServicio.Models
//{
//    public class UsuarioMgr
//    {
//    }
//}



using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;

namespace WebAppEmberServicio.Models
{
    public class UsuarioMgr
    {
        #region Singleton
        private static UsuarioMgr _instancia = null;
        public static UsuarioMgr Instancia
        {
            get
            {
                return _instancia == null ? _instancia = new UsuarioMgr() : _instancia;
            }
        }

        private UsuarioMgr() { }
        #endregion


        private static string _psKerp;
        private static string _usKerp = WebConfigurationManager.AppSettings["userEnde"];

        public void SetPsKerp(string ps)
        {
            _psKerp = ps;
        }
        public string GetPsKerp()
        {
            return _psKerp;
        }
        public string GetUsKerp()
        {
            return _usKerp;
        }

        #region Info Usuario Actual


        public string GetIPAddress()
        {
            System.Web.HttpContext context = System.Web.HttpContext.Current;
            string ipAddress = context.Request.ServerVariables["HTTP_X_FORWARDED_FOR"];

            if (!string.IsNullOrEmpty(ipAddress))
            {
                string[] addresses = ipAddress.Split(',');
                if (addresses.Length != 0)
                {
                    return addresses[0];
                }
            }

            return context.Request.ServerVariables["REMOTE_ADDR"];
        }

        public string GetUrlBase()
        {
            return HttpContext.Current.Request.Url.GetComponents(UriComponents.SchemeAndServer, UriFormat.Unescaped);
        }


        #endregion



        #region Validaciones

        #endregion
    }
}