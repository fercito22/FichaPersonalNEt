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
    public class GetMemoController : ApiController
    {
        // GET: api/GetMemo
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetMemo/5
        public IHttpActionResult GetDocumentos(int id)
        {
            List<SPA_Memorandum_Result> listaCursos = GetFichaPersonalMgr.Instancia.getMemo(id);            
            return Json(listaCursos);
        }
        

        // POST: api/GetMemo
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetMemo/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetMemo/5
        public void Delete(int id)
        {
        }
    }
}
