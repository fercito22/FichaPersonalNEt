using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebFichaPersonal.Data;
using WebFichaPersonal.Logic;

namespace WebAppEmberServicio.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GetBachillerController : ApiController
    {
        // GET: api/GetBachiller
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetBachiller/5
        public IHttpActionResult GetBachiller(int id)
        {
            //var dato = DetalleServicio(id);
            List<SPA_GetBachillerato_Result> Bachiller = GetFichaPersonalMgr.Instancia.getBachiller(id);
            return Json(Bachiller);
        }


        //public List<BachillerModelo> DetalleServicio(int id)
        //{
        //    List<BachillerModelo> lista = new List<BachillerModelo>();

        //    List<SPA_GetBachillerato_Result> Bachiller = GetFichaPersonalMgr.Instancia.getBachiller(id);
        //    List<int> listaContactoEmergencia = Bachiller.Select(x => x.empleadoID).Distinct().ToList();
        //    foreach (var item in listaContactoEmergencia)
        //    {
        //        SPA_GetBachillerato_Result obj = Bachiller.Where(x => x.empleadoID == item).FirstOrDefault();
        //        BachillerModelo bachillerato_model = new BachillerModelo();
        //        bachillerato_model.TipoColegio = obj.TipoColegio;
        //        bachillerato_model.NombreColegio = obj.NombreColegio;
        //        bachillerato_model.UltimoGradoVencido = obj.UltimoCursoVencido;
        //        bachillerato_model.Lugar = obj.Lugar;
        //        lista.Add(bachillerato_model);
        //    }
        //    return lista;
        //}

        // POST: api/GetBachiller
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetBachiller/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetBachiller/5
        public void Delete(int id)
        {
        }
    }
}
