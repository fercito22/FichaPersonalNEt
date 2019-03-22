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
    public class GetExpLaboralController : ApiController
    {
        // GET: api/GetExpLaboral 
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetExpLaboral/5
        public IHttpActionResult GetDocumentos(int id)
        {            
            List<SPA_GetExperienciaLaboral_Result> listaExpLaboral = GetFichaPersonalMgr.Instancia.getExperienciaLaborales(id);
            return Json(listaExpLaboral);
        }

        

        // POST: api/GetExpLaboral
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetExpLaboral/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetExpLaboral/5
        public void Delete(int id)
        {
        }
    }
}
