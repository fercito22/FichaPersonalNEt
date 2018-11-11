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


        //public List<ContactoEmergenciaModelo> DetalleServicio(int id)
        //{
        //    List<ContactoEmergenciaModelo> lista = new List<ContactoEmergenciaModelo>();

        //    List<SPA_GetContactoEmergencia_Result> contactoEmergencia = GetFichaPersonalMgr.Instancia.getContactoEmergencia(id);
        //    List<int> listaContactoEmergencia = contactoEmergencia.Select(x => x.EmpleadoID).Distinct().ToList();
        //    foreach (var item in listaContactoEmergencia)
        //    {
        //        SPA_GetContactoEmergencia_Result obj = contactoEmergencia.Where(x => x.EmpleadoID == item).FirstOrDefault();
        //        ContactoEmergenciaModelo Contacto_model = new ContactoEmergenciaModelo();
        //        Contacto_model.NombreContacto = obj.NombreContacto;
        //        Contacto_model.DireccionContacto = obj.Direccion;
        //        Contacto_model.TelefonoFijoContacto = obj.TelefonoDomicilio;
        //        Contacto_model.TelefonoCelularContacto = obj.NroCelular;
        //        Contacto_model.DireccionTrabajoContacto = obj.DireccionTrabajo;
        //        Contacto_model.TelefonoTrabajoContacto = obj.TelefonoTrabajo;
        //        Contacto_model.RelacionContacto = obj.Relacion;
        //        lista.Add(Contacto_model);
        //    }
        //    return lista;
        //}

        // POST: api/GetContactoEmergencia
        public void Post([FromBody]string value)
        {
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
