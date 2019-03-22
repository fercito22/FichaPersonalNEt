using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebAppEmberServicio.Controllers
{
    public class accesoController : Controller
    {
        // GET: acceso
        public ActionResult Index()
        {
            return View();
        }

        //public Common.ModelosServicio.ResultModel GetAutenticarUsuarioBoaSOA(string userName, string pwd)
        //{
        //    Common.ModelosServicio.ResultModel result = null;
        //    //using (var proxy = new ServicePortalCorporativo.ServicePortalCorporativoClient())
        //    try
        //    {
        //        //using (var proxy = new ServiceCorporativoTest.ServicePortalCorporativoClient())
        //        //{
        //        //    return proxy.AutentificarUsuario(userName, pwd);
        //        //}
        //        using (var proxy = new ServicePortalCorporativo.ServicePortalCorporativoClient())
        //        {
        //            string p_user = proxy.AutentificarUsuario(userName, pwd);
        //            result = JsonConvert.DeserializeObject<Common.ModelosServicio.ResultModel>(p_user);
        //        }
        //        if (result == null)
        //        {
        //            result = new Common.ModelosServicio.ResultModel
        //            {
        //                codigo = 0,
        //                mensaje = "No se encontro su usuario, intente de nuevo por favor."
        //            };
        //        }
        //    }
        //    catch (Exception e)
        //    {
        //        result = new Common.ModelosServicio.ResultModel
        //        {
        //            codigo = 0,
        //            mensaje = "No se proceso, intente de nuevo por favor."
        //        };
        //    }
        //    return result;
        //}


    }
}