using Newtonsoft.Json;
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
    public class GetPerfilComController : ApiController
    {
        // GET: api/GetPerfilCom
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetPerfilCom/5
        public IHttpActionResult GetPerfil(int id) //int id)
        {
            List<SPA_GetPerfil_Result> listaPerfil = GetFichaPersonalMgr.Instancia.getPerfilCom(id);
           // var Ip = UpdateFichaPersonalMgr.Instancia.miIp();

            if (listaPerfil.Count == 0)
            {
                List<SPA_GetPerfilNuevo_Result> listaPerfilNuevo = GetFichaPersonalMgr.Instancia.getPerfilNuevo(id);
                return Json(listaPerfilNuevo);
            }
            else
            {
                return Json(listaPerfil);
            }
            
        }

        // POST: api/GetPerfilCom
        [HttpPost]
        public ResultModel Post([FromBody] PerfilModelo perfil)
        {
            var dato = UpdateFichaPersonalMgr.Instancia.ActualizarPerfil(perfil.empleadoID, perfil.Nombre1, perfil.Apellido1, perfil.Apellido2,
                perfil.FechaNacimiento, perfil.Nacionalidad, perfil.CiudadNacimiento, perfil.LugarDeNacimiento,
                perfil.Direccion, perfil.EstadoCivil);
            return (dato);
        }

       

        // PUT: api/GetPerfilCom/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetPerfilCom/5
        public void Delete(int id)
        {
        }
    }
}
