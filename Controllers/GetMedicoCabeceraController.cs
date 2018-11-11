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
            //var dato = DetalleServicio(id);
            List<SPA_GetMedicoCabecera_Result> medicoCabecera = GetFichaPersonalMgr.Instancia.getMedicoCabecera(id);
            //return Ok(dato);
            return Json(medicoCabecera);
        }


        //public List<MedicoCabeceraModelo> DetalleServicio(int id)
        //{
        //    List<MedicoCabeceraModelo> lista = new List<MedicoCabeceraModelo>();

        //    List<SPA_GetMedicoCabecera_Result> medicoCabecera = GetFichaPersonalMgr.Instancia.getMedicoCabecera(id);
        //    List<int> listaMedicoCabecera = medicoCabecera.Select(x => x.empleadoID).Distinct().ToList();
        //    foreach (var item in listaMedicoCabecera)
        //    {
        //        SPA_GetMedicoCabecera_Result obj = medicoCabecera.Where(x => x.empleadoID == item).FirstOrDefault();
        //        MedicoCabeceraModelo documento_model = new MedicoCabeceraModelo();
        //        documento_model.Medico = obj.NombreMedico;
        //        documento_model.DireccionConsultorio = obj.DireccionMedico;
        //        documento_model.TelefonoFijo = obj.TelefonoMedico;
        //        documento_model.TelefoCelular = obj.NroCelularMedico;
        //        documento_model.Alergias = obj.AlergiasMedicas;
        //        documento_model.Medicamentos = obj.Medicamentos;
        //        documento_model.FactorSanguineo = obj.GrupoSanquineo;
        //        documento_model.RHSanguineo = obj.RH_Sanguineo;
        //        lista.Add(documento_model);
        //    }
        //    return lista;
        //}

        // POST: api/GetMedicoCabecera
        public void Post([FromBody]string value)
        {
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
