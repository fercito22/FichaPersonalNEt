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
    public class BeneficiariosController : ApiController
    {
        // GET: api/Beneficiarios
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Beneficiarios/5
        public IHttpActionResult GetBeneficiarios(int id) //int id)
        {
            List<SPA_GetBeneficiarios_Result> listaDeclaracion = GetFichaPersonalMgr.Instancia.getBeneficiarios(id);
            //var dato = DetalleServicio(id);
            //return Ok(dato);
            return Json(listaDeclaracion);
        }

        // POST: api/Beneficiarios
        [HttpPost]
        public ResultModel Post([FromBody] BeneficiarioModelo beneficiario)
        {
            var dato = UpdateFichaPersonalMgr.Instancia.ActualizarBeneficiario(beneficiario.empleadoID, beneficiario.datosFamiliaresID,
                    beneficiario.parentescoID, beneficiario.Nombres, beneficiario.Apellido1, beneficiario.Apellido2,
                    beneficiario.Tipo_NroDocumento, beneficiario.Estado, 
                    beneficiario.Finado, beneficiario.Identificador);
            //ResultModel dato = null;
            return (dato);
        }



        // PUT: api/Beneficiarios/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Beneficiarios/5
        public void Delete(int id)
        {
        }
    }
}
