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
    public class GetContactoEmergenciaController : ApiController
    {
        // GET: api/GetContactoEmergencia
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetContactoEmergencia/5
        public IHttpActionResult Get(int id)
        {
            List<SPA_GetContactoEmergencia_Result> contactoEmergencia = GetFichaPersonalMgr.Instancia.getContactoEmergencia(id);
            //var dato = DetalleServicio(id);
            return Json(contactoEmergencia);
        }

        // POST: api/GetContactoEmergencia
        [HttpPost]
        public ResultModel Post([FromBody] ContactoEmergenciaModelo contacto)
        {
            var dato = UpdateFichaPersonalMgr.Instancia.ActualizarContactoEmergencia(contacto.empleadoID, contacto.NombreContacto,
                          contacto.Relacion ,contacto. Direccion , contacto.TelefonoDomicilio, contacto.DireccionTrabajo, 
                          contacto.TelefonoTrabajo, contacto.NroCelular, contacto.Identificador);
            return (dato);
        }

        // PUT: api/GetContactoEmergencia/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetContactoEmergencia/5
        public void Delete(int id)
        {
        }
    }
}
