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
    public class GetEntrenamientoController : ApiController
    {
        // GET: api/GetEntrenamiento
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetEntrenamiento/5
        public IHttpActionResult GetDocumentos(int id)
        {
            List<SPA_EntrenamientoBoa_Result> listaCursos = GetFichaPersonalMgr.Instancia.getEntrenamiento(id);
            //var dato = DetalleServicio(id);
            return Json(listaCursos);
        }


        //public List<EntrenamientoBoaModelo> DetalleServicio(int id)
        //{
        //    List<EntrenamientoBoaModelo> lista = new List<EntrenamientoBoaModelo>();

        //    List<SPA_EntrenamientoBoa_Result> listaCursos = GetFichaPersonalMgr.Instancia.getEntrenamiento(id);
        //    List<int> listaDocumentosPersonales = listaCursos.Select(x => x.CursoID).Distinct().ToList();
        //    foreach (var item in listaDocumentosPersonales)
        //    {
        //        SPA_EntrenamientoBoa_Result obj = listaCursos.Where(x => x.CursoID == item).FirstOrDefault();
        //        EntrenamientoBoaModelo titulos_model = new EntrenamientoBoaModelo();
        //        titulos_model.Institucion = obj.Institucion;
        //        List<DatosEntrenamientoModelo> listaDatosCurso = new List<DatosEntrenamientoModelo>();

        //        List<int> listaDatosCursos = listaCursos.Where(x => x.CursoID == item).Select(x => x.CursoID).Distinct().ToList();

        //        foreach (var DatosTitulos in listaDatosCursos)
        //        {

        //            SPA_EntrenamientoBoa_Result obj2 = listaCursos.Where(x => x.CursoID == DatosTitulos).FirstOrDefault();
        //            DatosEntrenamientoModelo entrenamiento_Modelo = new DatosEntrenamientoModelo();

        //            entrenamiento_Modelo.NombreCurso = obj2.Nombre;
        //            entrenamiento_Modelo.Descripcion = obj2.Descripcion;
        //            entrenamiento_Modelo.FechaInicio = obj2.FechaEntrega; // .ToString("dd MMM yyyy");
        //            entrenamiento_Modelo.FechaFin = obj2.FechaFinVigencia; //.ToString("dd MMM yyyy"); // ToString("dd MMM yyyy");
        //            entrenamiento_Modelo.NroHoras = obj2.NroHoras;
        //            listaDatosCurso.Add(entrenamiento_Modelo);
        //        }
        //        titulos_model.datosesntrenamiento = listaDatosCurso;
        //        lista.Add(titulos_model);
        //    }
        //    return lista;
        //}

        // POST: api/GetEntrenamiento
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetEntrenamiento/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetEntrenamiento/5
        public void Delete(int id)
        {
        }
    }
}
