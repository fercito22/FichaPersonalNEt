using Newtonsoft.Json;
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
    public class GetIdiomasController : ApiController
    {
        // GET: api/GetIdiomas
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetIdiomas/5
        public IHttpActionResult GetDocumentos(int id)
        {
            List<SPA_GetIdiomas_Result> listaIdiomas = GetFichaPersonalMgr.Instancia.getIdiomas(id);
            return Json(listaIdiomas);
        }

        // POST: api/GetIdiomas
        [HttpPost]
        public ResultModel Post([FromBody] IdiomaModelo idioma)
        {
            var dato = UpdateFichaPersonalMgr.Instancia.ActualizarIdioma(idioma.empleadoID, idioma.idiomaID, idioma.lee, idioma.habla,
                idioma.escribe , idioma.Identificador);
            return (dato);
        }
        
       

        // PUT: api/GetIdiomas/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetIdiomas/5
        public void Delete(int id)
        {
        }
    }
}
