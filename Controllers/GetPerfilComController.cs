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
    public class GetPerfilComController : ApiController
    {
        // GET: api/GetPerfilCom
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetPerfilCom/5
        public IHttpActionResult GetDeclaracion(int id) //int id)
        {
            List<SPA_GetPerfil_Result> listaDeclaracion = GetFichaPersonalMgr.Instancia.getPerfilCom(id);
            //var dato = DetalleServicio(id);
            //return Ok(dato);
            return Json(listaDeclaracion);
        }

        // POST: api/GetPerfilCom
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetPerfilCom/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetPerfilCom/5
        public void Delete(int id)
        {
        }
    }
}
