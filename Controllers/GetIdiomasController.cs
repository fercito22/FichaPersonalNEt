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
    public class GetIdiomasController : ApiController
    {
        // GET: api/GetIdiomas
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetIdiomas/5
        public IHttpActionResult GetDocumentos(int id)
        {
            List<SPA_GetIdiomas_Result> listaIdiomas = GetFichaPersonalMgr.Instancia.getIdiomas(id);
            //var dato = DetalleServicio(id);
            return Json(listaIdiomas);
        }


        //public List<IdiomaModelo> DetalleServicio(int id)
        //{
        //    List<IdiomaModelo> lista = new List<IdiomaModelo>();

        //    List<SPA_GetIdiomas_Result> listaIdiomas = GetFichaPersonalMgr.Instancia.getIdiomas(id);
        //    List<int> listaDocumentosPersonales = listaIdiomas.Select(x => x.idiomaID).Distinct().ToList();
        //    foreach (var item in listaDocumentosPersonales)
        //    {
        //        SPA_GetIdiomas_Result obj = listaIdiomas.Where(x => x.idiomaID == item).FirstOrDefault();
        //        IdiomaModelo idioma_model = new IdiomaModelo();
        //        idioma_model.Idioma = obj.Nombre;
        //        List<DatosIdiomaModelo> listaDatosDocumentos = new List<DatosIdiomaModelo>();

        //        List<int> listaDatosDocumentacion = listaIdiomas.Where(x => x.idiomaID == item).Select(x => x.idiomaID).Distinct().ToList();

        //        foreach (var DatosDocumentos in listaDatosDocumentacion)
        //        {
        //            SPA_GetIdiomas_Result obj2 = listaIdiomas.Where(x => x.idiomaID == DatosDocumentos).FirstOrDefault();
        //            DatosIdiomaModelo datos_Modelo = new DatosIdiomaModelo();

        //            datos_Modelo.Lee = obj2.Lee;
        //            datos_Modelo.Habla = obj2.Habla;
        //            datos_Modelo.Escribe = obj2.Escribe;
        //            listaDatosDocumentos.Add(datos_Modelo);
        //        }
        //        idioma_model.datosidioma = listaDatosDocumentos;
        //        lista.Add(idioma_model);
        //    }
        //    return lista;
        //}

        // POST: api/GetIdiomas
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetIdiomas/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetIdiomas/5
        public void Delete(int id)
        {
        }
    }
}
