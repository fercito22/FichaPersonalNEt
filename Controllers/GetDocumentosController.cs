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
            List<SPA_GetDocumentosPersonales_Result> listaDocumentos = GetFichaPersonalMgr.Instancia.getDocumentosPersonales(id);            
            return Json(listaDocumentos);
        }

        // GET: api/GetDocumentos/5
        public IHttpActionResult GetDocumentos(int id, int DocumentoPersonalID) //int id)
        {            
            List<SPA_GetDocumentosPersonales_Result> listaDocumentos = GetFichaPersonalMgr.Instancia.getDocumentosPersonales(id, DocumentoPersonalID);            
            return Json(listaDocumentos);
        }

        // POST: api/GetDocumentos
        [HttpPost]
        public ResultModel Post([FromBody] DocumentosModelo documento)
        {
            var dato = UpdateFichaPersonalMgr.Instancia.ActualizarDocumento(documento.empleadoID, documento.DocumentoID, documento.Numero,
                            documento.FechaEmision, documento.FechaVencimiento, documento.Observacion, documento.ConAlerta,
                            documento.Estado, documento.Referencia, documento.DocumentoPersonalID , documento.Identificador);                        
            return (dato);
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
