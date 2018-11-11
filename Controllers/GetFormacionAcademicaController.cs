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
            //var dato = DetalleServicio(id);
            return Json(listaTitulos);
        }


        //public List<TitulosModelo> DetalleServicio(int id)
        //{
        //    List<TitulosModelo> lista = new List<TitulosModelo>();

        //    List<SPA_Titulos_Result> listaTitulos = GetFichaPersonalMgr.Instancia.getTitulos(id);
        //    List<int> listaDocumentosPersonales = listaTitulos.Select(x => x.nivelAcademicoID).Distinct().ToList();
        //    foreach (var item in listaDocumentosPersonales)
        //    {
        //        SPA_Titulos_Result obj = listaTitulos.Where(x => x.nivelAcademicoID == item).FirstOrDefault();
        //        TitulosModelo titulos_model = new TitulosModelo();
        //        titulos_model.GradoFormacion = obj.GradoFormacion;
        //        List<DatosTituloModelo> listaDatosTitulos = new List<DatosTituloModelo>();

        //        List<int> listaDatosDocumentacion = listaTitulos.Where(x => x.nivelAcademicoID == item).Select(x => x.nivelAcademicoID).Distinct().ToList();

        //        foreach (var DatosTitulos in listaDatosDocumentacion)
        //        {

        //            SPA_Titulos_Result obj2 = listaTitulos.Where(x => x.nivelAcademicoID == DatosTitulos).FirstOrDefault();
        //            DatosTituloModelo titulo_Modelo = new DatosTituloModelo();

        //            titulo_Modelo.Titulo = obj2.titulo;
        //            titulo_Modelo.Institucion = obj2.institucion;
        //            titulo_Modelo.Desde = obj2.fechainicio; //.ToString("dd MMM yyyy");
        //            titulo_Modelo.Hasta = obj2.fechafin; //.ToString("dd MMM yyyy");
        //            listaDatosTitulos.Add(titulo_Modelo);
        //        }
        //        titulos_model.datostitulo = listaDatosTitulos;
        //        lista.Add(titulos_model);
        //    }
        //    return lista;
        //}

        // POST: api/GetFormacionAcademica
        public void Post([FromBody]string value)
        {
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
