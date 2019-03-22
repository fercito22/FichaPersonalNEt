using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Security;
using WebAppEmberServicio.Models;
using WebFichaPersonal.Data;

namespace WebAppEmberServicio.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UsuarioController : ApiController
    {
        // GET: api/Usuario
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Usuario/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Usuario
        [HttpPost]
        //POST: api/Usuario
        public ResultModel Post([FromBody]Login model)
        {
            SPA_ValidarUsuarioFichaPersonal_Result validar = null;
            SPA_GetEmpleadoId_Result usuarioId = null;
            SPA_GetEmpleadoIdErp_Result idErp = null;
            using (var db = new FichaPersonalEntities())
            {
                validar = db.SPA_ValidarUsuarioFichaPersonal(model.userName, model.Password).FirstOrDefault();
                usuarioId = db.SPA_GetEmpleadoId(model.userName).FirstOrDefault();
                if (usuarioId != null)
                {
                    idErp = db.SPA_GetEmpleadoIdErp(usuarioId.empleadoID).FirstOrDefault();
                    FormsAuthentication.SetAuthCookie(model.userName, false);
                }
            }
            if (validar != null)
            {
                if (validar.codigo == 1)
                {                    
                    return new ResultModel { objeto = new { model , usuarioId, idErp } , codigo = usuarioId.empleadoID, mensaje = validar.mensaje };
                }
                else
                {
                    return new ResultModel { objeto = model, codigo = 0, mensaje = validar.mensaje };
                }
            }
            else
            {
                return new ResultModel { objeto = model, codigo = 0, mensaje = "se perdio la conexion intentelo nuevamente porfavor" };                
            }            
        }
        

        // PUT: api/Usuario/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Usuario/5
        public void Delete(int id)
        {
        }
    }
}
