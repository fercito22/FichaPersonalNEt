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
    public class GetDeclaracionController : ApiController
    {
        // GET: api/GetDeclaracion
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetDeclaracion/5
        public IHttpActionResult GetDeclaracion(int id) //int id)
        {
            List<SPA_GetDeclaracion_Result> listaDeclaracion = GetFichaPersonalMgr.Instancia.getDeclaracion(id);
            return Json(listaDeclaracion);
        }

        // POST: api/GetDeclaracion
        [HttpPost]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/GetDeclaracion/Declaracion")]        
        public ResultModel Post([FromBody] DeclaracionModelo declaracion)
        {
            var dato = UpdateFichaPersonalMgr.Instancia.ActualizarBeneficiario(declaracion.empleadoID, declaracion.datosFamiliaresID,
                declaracion.parentescoID, declaracion.Nombres,
                declaracion.Apellido1, declaracion.Apellido2, declaracion.Tipo_NroDocumento, 
                declaracion.Estado, declaracion.Finado, declaracion.Identificador);            
            return (dato);
        }       

        // POST: api/GetDeclaracion
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetDeclaracion/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetDeclaracion/5
        public void Delete(int id)
        {
        }
    }
}
