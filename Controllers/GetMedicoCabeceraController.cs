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
    public class GetMedicoCabeceraController : ApiController
    {
        // GET: api/GetMedicoCabecera
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetMedicoCabecera/5
        public IHttpActionResult GetMedico(int id) //int id)
        {
            List<SPA_GetMedicoCabecera_Result> medicoCabecera = GetFichaPersonalMgr.Instancia.getMedicoCabecera(id);
            return Json(medicoCabecera);
        }

        

        // POST: api/GetMedicoCabecera
        [HttpPost]
        public ResultModel Post([FromBody] MedicoCabeceraModelo medico)
        {
            var dato = UpdateFichaPersonalMgr.Instancia.ActualizarMedico(medico.empleadoID, medico.NombreMedico, medico.TelefonoMedico,
                    medico.Nrocelular, medico.AlergiasMedicas, medico.Medicamentos, medico.DireccionMedico, medico.GrupoSanquineo,
                    medico.RH_Sanguineo, medico.Identificador);        
            return (dato);
        }
       
        // PUT: api/GetMedicoCabecera/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetMedicoCabecera/5
        public void Delete(int id)
        {
        }
    }
}
