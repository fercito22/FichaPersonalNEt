using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

using WebAppEmberServicio.Models;
using WebAppEmberServicio.Models.Personal;
using WebFichaPersonal.Data;
using WebFichaPersonal.Logic;

namespace WebAppEmberServicio.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GetPerfilController : ApiController
    {
        // GET: api/GetPerfil
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2", "value3", "value4", "value5" };
        //}

        // GET: api/GetPerfil/5
        public IHttpActionResult Get(int id)
        {
            //return "value";
            var dato = DetalleServicio(id);            
            return Json(dato);
        }


        public List<PersonalModelo> DetalleServicio(int id)
        {
            List<PersonalModelo> lista = new List<PersonalModelo>();

            List<SPA_DatosPersonales_Result> medicoCabecera = GetFichaPersonalMgr.Instancia.getPersonal(id);
            //List<SPA_DatosPersonales_Result> medicoCabecera = Personal(id);
            List<int> listaMedicoCabecera = medicoCabecera.Select(x => x.empleadoID).Distinct().ToList();
            foreach (var item in listaMedicoCabecera)
            {
                SPA_DatosPersonales_Result obj = medicoCabecera.Where(x => x.empleadoID == item).FirstOrDefault();
                PersonalModelo documento_model = new PersonalModelo();
                documento_model.Nombres = obj.Nombre1;
                documento_model.ApellidoPaterno = obj.Apellido1;
                documento_model.ApellidoMaterno = obj.Apellido2;
                documento_model.FechaNacimiento = obj.FechaNacimiento;
                documento_model.EstadoCivil = obj.EstadoCivil;
                documento_model.LugarNacimiento = obj.LugarDeNacimiento;
                documento_model.Fotografia = obj.Foto;
                documento_model.Genero = obj.Genero;
                lista.Add(documento_model);
            }
            return lista;
        }    

        // POST: api/GetPerfil
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetPerfil/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetPerfil/5
        public void Delete(int id)
        {
        }
    }
}
