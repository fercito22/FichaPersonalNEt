using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebAppEmberServicio.Models;
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

        // POST: api/GetBachiller        
        [HttpPost]
        public ResultModel Post([FromBody] BachillerModelo bachiller)
        {
            var dato = UpdateFichaPersonalMgr.Instancia.ActualizarBachiller(bachiller.empleadoID, bachiller.NombreColegio,
                          bachiller.Lugar, bachiller.TipoColegio, bachiller.UltimoCursoVencido, bachiller.Identificador);
          
            return (dato);
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
