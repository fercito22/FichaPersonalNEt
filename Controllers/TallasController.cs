

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Configuration;
using System.Web.Http;
using WebAppEmberServicio.Models;
using WebFichaPersonal.Data;

using Newtonsoft.Json;
using System.Web.Http.Cors;

namespace WebAppEmberServicio.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TallasController : ApiController
    {
        // GET: api/Tallas
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }


        

        // GET: api/Tallas/5
        public IHttpActionResult GetTallas(string id)
        {
            //var ids = "280";            
            string pass = UsuarioMgr.Instancia.GetPsKerp();            
            var dato = UpdateFichaPersonalMgr.Instancia.RegistrarTallas(id, "sistema.dotaciones");
            return Json(dato);
        }

        // GET: api/Comunicacion
        [HttpPost]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Talla/Detalle")]
        public IHttpActionResult Detalle([FromBody] DetalleTallaModelo detalle) //int id , int codigo) //, int controlDotacionID)
        {
            var controlDotacionID = 0;
            var id = detalle.empleadoID;
            if (detalle.controlDotacionID == 0)
            {
                List<SPA_ComboDetalleDotacion_Result> listaDetalleTallas = UpdateFichaPersonalMgr.Instancia.comboDetalleDotacionEmp();
                var primero = listaDetalleTallas.FirstOrDefault().ControlDotacionID;
                controlDotacionID = primero;

            }
            else
            {                
                controlDotacionID = detalle.controlDotacionID;                
            }
            
            var pass = "YNQvrsbpZ0zRhGBpEnE8AbtimyFa4LEPIK4wLR7I/D1StU0FKVYrcpRy93wRbbQS0T46oxUhfFIqmWUSe0qv6w==";
            var  listaComunicacion = UpdateFichaPersonalMgr.Instancia.GetDetalleDotacionEmp( controlDotacionID, id, pass);
            return Json(listaComunicacion);
        }

        // POST: api/Tallas
        [HttpPost]
        public ResultModel Post([FromBody] TallaActModelo tallas)
        {
            var dato = UpdateFichaPersonalMgr.Instancia.ActualizarTallasEmpleado(tallas.EmpleadoItemID,
                            tallas.codTalla, tallas.Talla , tallas.id);
            return (dato);
        }

        // GET: api/DetalleTallas
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Combo/DetalleTallas")]
        public IHttpActionResult DetalleTallas()
        {
            List<SPA_ComboDetalleDotacion_Result> listaDetalleTallas = UpdateFichaPersonalMgr.Instancia.comboDetalleDotacionEmp();
            return Json(listaDetalleTallas);
        }




        // PUT: api/PruebaTalla/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/PruebaTalla/5
        public void Delete(int id)
        {
        }
    }
}
