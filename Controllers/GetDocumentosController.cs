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
    public class GetDocumentosController : ApiController
    {
        // GET: api/GetDocumentos
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetDocumentos/5
        public IHttpActionResult GetDocumentos(int id) //int id)
        {
            //var dato = DetalleServicio(id);
            List<SPA_GetDocumentosPersonales_Result> listaDocumentos = GetFichaPersonalMgr.Instancia.getDocumentosPersonales(id);
            //return Ok(dato);
            return Json(listaDocumentos);
        }


        //public List<DocumentosPersonalesModelo> DetalleServicio(int id)
        //{
        //    List<DocumentosPersonalesModelo> lista = new List<DocumentosPersonalesModelo>();

        //    List<SPA_GetDocumentosPersonales_Result> listaDocumentos = GetFichaPersonalMgr.Instancia.getDocumentosPersonales(id);
        //    List<int> listaDocumentosPersonales = listaDocumentos.Select(x => x.DocumentoID).Distinct().ToList();
        //    foreach (var item in listaDocumentosPersonales)
        //    {
        //        SPA_GetDocumentosPersonales_Result obj = listaDocumentos.Where(x => x.DocumentoID == item).FirstOrDefault();
        //        DocumentosPersonalesModelo documento_model = new DocumentosPersonalesModelo();
        //        documento_model.documentos = obj.TipoDocumento;
        //        List<DatosDocumentosModelo> listaDatosDocumentos = new List<DatosDocumentosModelo>();

        //        List<int> listaDatosDocumentacion = listaDocumentos.Where(x => x.DocumentoID == item).Select(x => x.DocumentoID).Distinct().ToList();

        //        foreach (var DatosDocumentos in listaDatosDocumentacion)
        //        {

        //            SPA_GetDocumentosPersonales_Result obj2 = listaDocumentos.Where(x => x.DocumentoID == DatosDocumentos).FirstOrDefault();
        //            DatosDocumentosModelo datos_Modelo = new DatosDocumentosModelo();

        //            datos_Modelo.NroDocumento = obj2.NumeroDocumento;
        //            datos_Modelo.FechaEmision = obj2.FechaEmision.ToString("dd MMM yyyy");
        //            datos_Modelo.FechaVencimiento = obj2.FechaVencimiento.ToString("dd MMM yyyy");
        //            datos_Modelo.Observacion = obj2.Observacion;
        //            listaDatosDocumentos.Add(datos_Modelo);
        //        }
        //        documento_model.datosdocumentos = listaDatosDocumentos;
        //        lista.Add(documento_model);
        //    }
        //    return lista;
        //}

        // POST: api/GetDocumentos
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetDocumentos/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetDocumentos/5
        public void Delete(int id)
        {
        }
    }
}
