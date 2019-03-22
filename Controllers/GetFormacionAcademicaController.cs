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
    public class GetFormacionAcademicaController : ApiController
    {
        // GET: api/GetFormacionAcademica
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetFormacionAcademica/5
        public IHttpActionResult GetTitulos(int id)
        {
            List<SPA_Titulos_Result> listaTitulos = GetFichaPersonalMgr.Instancia.getTitulos(id);
            if(listaTitulos.Count == 0)
            {
                listaTitulos = new List<SPA_Titulos_Result>();
            }
            
            return Json(listaTitulos);
        }

        // POST: api/GetFormacionAcademica
        [HttpPost]
        public ResultModel Post([FromBody] FormacionAcademicaModelo formacion)
        {
            var dato = UpdateFichaPersonalMgr.Instancia.ActualizarFormacionAcademica(formacion.empleadoID, formacion.nivelAcademicoID,
                        formacion.titulo, formacion.institucion, formacion.fechainicio, formacion.fechafin, formacion.educacionSuperiorID, formacion.Identificador);            
            return (dato);
        }
               

        // PUT: api/GetFormacionAcademica/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetFormacionAcademica/5
        public void Delete(int id)
        {
        }
    }
}
