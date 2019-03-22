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
    public class GetEntrenamientoController : ApiController
    {
        // GET: api/GetEntrenamiento
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetEntrenamiento/5
        public IHttpActionResult GetDocumentos(int id)
        {
            List<SPA_EntrenamientoBoa_Result> listaCursos = GetFichaPersonalMgr.Instancia.getEntrenamiento(id);            
            return Json(listaCursos);
        }


       

        // POST: api/GetEntrenamiento
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetEntrenamiento/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetEntrenamiento/5
        public void Delete(int id)
        {
        }
    }
}
