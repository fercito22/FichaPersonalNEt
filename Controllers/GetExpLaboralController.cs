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
    public class GetExpLaboralController : ApiController
    {
        // GET: api/GetExpLaboral
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetExpLaboral/5
        public IHttpActionResult GetDocumentos(int id)
        {
            //var dato = DetalleServicio(id);
            List<SPA_GetExperienciaLaboral_Result> listaExpLaboral = GetFichaPersonalMgr.Instancia.getExperienciaLaborales(id);
            return Json(listaExpLaboral);
        }


        //public List<ExpLaboralModelo> DetalleServicio(int id)
        //{
        //    List<ExpLaboralModelo> lista = new List<ExpLaboralModelo>();

        //    List<SPA_GetExperienciaLaboral_Result> listaExpLaboral = GetFichaPersonalMgr.Instancia.getExperienciaLaborales(id);
        //    List<int> listaDocumentosPersonales = listaExpLaboral.Select(x => x.experiencialaboralID).Distinct().ToList();
        //    foreach (var item in listaDocumentosPersonales)
        //    {
        //        SPA_GetExperienciaLaboral_Result obj = listaExpLaboral.Where(x => x.experiencialaboralID == item).FirstOrDefault();
        //        ExpLaboralModelo experiencia_model = new ExpLaboralModelo();
        //        experiencia_model.Cargo = obj.Cargo;
        //        List<DatosCargoModelo> listaDatosDocumentos = new List<DatosCargoModelo>();

        //        List<int> listaDatosDocumentacion = listaExpLaboral.Where(x => x.experiencialaboralID == item).Select(x => x.experiencialaboralID).Distinct().ToList();

        //        foreach (var DatosDocumentos in listaDatosDocumentacion)
        //        {

        //            SPA_GetExperienciaLaboral_Result obj2 = listaExpLaboral.Where(x => x.experiencialaboralID == DatosDocumentos).FirstOrDefault();
        //            DatosCargoModelo datos_Modelo = new DatosCargoModelo();

        //            datos_Modelo.TipoEmpresa = obj2.tipoInstitucion;
        //            datos_Modelo.NombreIstitucion = obj2.Institucion;
        //            datos_Modelo.Desde = obj2.fechaDesde; //.ToString("dd MMM yyyy");
        //            datos_Modelo.Hasta = obj2.fechaHasta; //.ToString("dd MMM yyyy");
        //            datos_Modelo.MotivoRetiro = obj2.motivoCambio;
        //            listaDatosDocumentos.Add(datos_Modelo);
        //        }
        //        experiencia_model.datoscargo = listaDatosDocumentos;
        //        lista.Add(experiencia_model);
        //    }
        //    return lista;
        //}


        // POST: api/GetExpLaboral
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetExpLaboral/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetExpLaboral/5
        public void Delete(int id)
        {
        }
    }
}
