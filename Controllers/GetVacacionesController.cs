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
            //var dato = DetalleServicio(id);
            //return Ok(dato);
            return Json(Vacaciones);
        }


        //public List<HistorialVacacionModelo> DetalleServicio(int id)
        //{
        //    List<HistorialVacacionModelo> lista = new List<HistorialVacacionModelo>();

        //    List<SPA_HistorialVacaciones_Result> Vacaciones = GetFichaPersonalMgr.Instancia.getVacaciones(id);
        //    List<int> listaVacaciones = Vacaciones.Select(x => x.HistorialVacacionID).Distinct().ToList();
        //    foreach (var item in listaVacaciones)
        //    {
        //        SPA_HistorialVacaciones_Result obj = Vacaciones.Where(x => x.HistorialVacacionID == item).FirstOrDefault();
        //        HistorialVacacionModelo vacaciones_model = new HistorialVacacionModelo();
        //        vacaciones_model.Gestion = obj.Gestion;
        //        List<DatosVacacionesModelo> listaDatosVacaciones = new List<DatosVacacionesModelo>();

        //        List<int> listaDatosVacacion = Vacaciones.Where(x => x.HistorialVacacionID == item).Select(x => x.HistorialVacacionID).Distinct().ToList();

        //        foreach (var DatosTitulos in listaDatosVacacion)
        //        {

        //            SPA_HistorialVacaciones_Result obj2 = Vacaciones.Where(x => x.HistorialVacacionID == DatosTitulos).FirstOrDefault();
        //            DatosVacacionesModelo vacacion_Modelo = new DatosVacacionesModelo();

        //            vacacion_Modelo.TotalDias = obj2.TotalDias;
        //            vacacion_Modelo.DiasUsados = obj2.DiasUdados;
        //            vacacion_Modelo.SaldoDias = obj2.SaldoDias; //.ToString("dd MMM yyyy");
        //            listaDatosVacaciones.Add(vacacion_Modelo);
        //        }
        //        vacaciones_model.datosvacaciones = listaDatosVacaciones;
        //        lista.Add(vacaciones_model);
        //    }
        //    return lista;
        //}

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
