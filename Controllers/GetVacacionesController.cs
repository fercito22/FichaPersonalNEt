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
    public class GetVacacionesController : ApiController
    {
        // GET: api/GetVacaciones
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetVacaciones/5
        public IHttpActionResult GetContactoEmergencia(int id) //int id)
        {
            List<SPA_HistorialVacaciones_Result> Vacaciones = GetFichaPersonalMgr.Instancia.getVacaciones(id);
            return Json(Vacaciones);
        }
        

        // POST: api/GetVacaciones
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetVacaciones/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetVacaciones/5
        public void Delete(int id)
        {
        }
    }
}
