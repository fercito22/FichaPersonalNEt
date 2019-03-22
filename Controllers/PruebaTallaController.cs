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

namespace WebAppEmberServicio.Controllers
{
    public class PruebaTallaController : ApiController
    {
        // GET: api/PruebaTalla
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }


        private static string UrlBase = "http://erp.obairlines.bo/pxp/lib/rest/";

        // GET: api/PruebaTalla/5
        public IHttpActionResult GetTallas(string id)
        {            
            string pass = UsuarioMgr.Instancia.GetPsKerp();         
            var dato = RegistrarTallas(id, "sistema.dotaciones");
            return Json(dato);
        }

        public List<TallasModelo> RegistrarTallas(string id, string pass)
        {            
            List<TallasModelo> lista = new List<TallasModelo>();
            using (var db = new DotacionUniformeEntities())
            {
                var validador = db.SPA_ValidaHabilitacionModTallas(int.Parse(id.Split('-')[0])).First();                

                lista = (from x in db.SP_GetItemTallasEmpleado(280, 0)
                         select new TallasModelo()
                         {
                             CodTalla = x.CodTalla,
                             ConTalla = x.ConTalla,
                             ControlDotacionID = x.ControlDotacionID,
                             DetallePaqueteID = x.DetallePaqueteID,
                             EmpleadoItemID = x.EmpleadoItemID,
                             genero = x.genero,
                             GrupoEmpleadoID = x.GrupoEmpleadoID,
                             item = x.item,
                             nombre = x.nombre,
                             Validar = validador

                         }).ToList(); ;
            }

            // ViewBag.Nombre = "";
            string codigos = string.Join(",", lista.Where(m => m.ConTalla == "si").Select(m => m.item));

            if (codigos != "")
            {
                var sal = GetTallasXCodigo("sistema.dotaciones", codigos);
                foreach (var item in lista.Where(m => m.ConTalla == "si"))
                {
                    item.ListaTallas = sal.datos.Where(m => m.codigo.Contains(item.item + ".")).ToList();
                    item.ListaTallas.Insert(0, new DetalleTallasModelo() { codigo = "", nombre = "Selecionar Talla" });
                }
                // result.ListData = lista;
            }
            return lista;

        }




        public TallasModel GetTallasXCodigo(string pass, string codigos, int id_almacen = 1)
        {
            //http://erp.obairlines.bo/pxp/lib/rest/almacenes/Clasificacion/listarClasificacionRopaTrabajoTalla
            string userERP = WebConfigurationManager.AppSettings["userEnde"];
            pass = WebConfigurationManager.AppSettings["passEnde"];

            //string pwd = pass;
            //System.Security.Cryptography.MD5 hs = System.Security.Cryptography.MD5.Create;
            //byte[] db = hs.ComputeHash(System.Text.Encoding.UTF8.GetBytes(pwd));
            //string result = Convert.ToBase64String(db);
            //pass = result;

            pass = "YNQvrsbpZ0zRhGBpEnE8AbtimyFa4LEPIK4wLR7I/D1StU0FKVYrcpRy93wRbbQS0T46oxUhfFIqmWUSe0qv6w==";
            string uri = UrlBase + "almacenes/Clasificacion/listarClasificacionRopaTrabajoTalla";
            Dictionary<string, string> parametros = new Dictionary<string, string>();
            parametros.Add("filtro", codigos);
            parametros.Add("start", "0");
            parametros.Add("limit", "200");

            string jsonString = REST.GetResponse_POST(uri, parametros, "application/x-www-form-urlencoded", userERP, pass);
            TallasModel data = new TallasModel();

            data = JsonConvert.DeserializeObject<TallasModel>(jsonString);

            //if (string.IsNullOrWhiteSpace(jsonString))
            //{
            //    return new TallasModel();
            //}
            //TallasModel resultado = new JavaScriptSerializer()
            //   .Deserialize<TallasModel>(jsonString);
            return data;
        }

        public static string base64Encode(string sData) // Encode
        {
            try
            {
                byte[] encData_byte = new byte[sData.Length];
                encData_byte = System.Text.Encoding.UTF8.GetBytes(sData);
                string encodedData = Convert.ToBase64String(encData_byte);
                return encodedData;
            }
            catch (Exception ex)
            {
                throw new Exception("Error in base64Encode" + ex.Message);
            }
        }





        // POST: api/PruebaTalla
        public void Post([FromBody]string value)
        {
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
