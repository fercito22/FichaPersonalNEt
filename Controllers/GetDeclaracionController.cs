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
    public class GetDeclaracionController : ApiController
    {
        // GET: api/GetDeclaracion
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetDeclaracion/5
        public IHttpActionResult GetDeclaracion(int id) //int id)
        {
            List<SPA_GetDeclaracion_Result> listaDeclaracion = GetFichaPersonalMgr.Instancia.getDeclaracion(id);
            //var dato = DetalleServicio(id);
            //return Ok(dato);
            return Json(listaDeclaracion);
        }

        //public List<DeclaracionModelo> DetalleServicio(int id)
        //{
        //    List<DeclaracionModelo> lista = new List<DeclaracionModelo>();

        //    List<SPA_GetDeclaracion_Result> listaDeclaracion = GetFichaPersonalMgr.Instancia.getDeclaracion(id);
        //    List<int> listaFamiliaresDeclaracion = listaDeclaracion.Select(x => x.parentescoID).Distinct().ToList();
        //    foreach (var item in listaFamiliaresDeclaracion)
        //    {
        //        SPA_GetDeclaracion_Result obj = listaDeclaracion.Where(x => x.parentescoID == item).FirstOrDefault();
        //        DeclaracionModelo declaracion_model = new DeclaracionModelo();
        //        declaracion_model.parentesco = obj.TipoParentesco;
        //        List<DatosFamiliares> listaDatosFamiliares = new List<DatosFamiliares>();
        //        //DatosFamiliares[] listaDatosFamiliares = new DatosFamiliares[] { };

        //        //List<int> listaDatosComunicaciones = listaComunicacion.Where(x => x.empleadoID == item).Select(x => x.comunicacionID).Distinct().ToList();
        //        List<int> listaDatosDeclaracion = listaDeclaracion.Where(x => x.parentescoID == item).Select(x => x.datosFamiliaresID).Distinct().ToList();

        //        foreach (var DatosParentesco in listaDatosDeclaracion)
        //        {
        //            //SPA_GetComunicacion_Result obj2 = listaComunicacion.Where(x => x.comunicacionID == DatosComunicacion).FirstOrDefault();
        //            SPA_GetDeclaracion_Result obj2 = listaDeclaracion.Where(x => x.datosFamiliaresID == DatosParentesco).FirstOrDefault();
        //            DatosFamiliares datos_Modelo = new DatosFamiliares();
        //            //DatosFamiliares[] datos_Modelo = new DatosFamiliares[] { };
        //            //datos_Modelo.pus

        //            datos_Modelo.nombres = obj2.Nombres;
        //            datos_Modelo.ApellidoPaterno = obj2.Apellido1;
        //            datos_Modelo.ApellidoMaterno = obj2.Apellido2;
        //            datos_Modelo.CI = obj2.Tipo_NroDocumento;
        //            datos_Modelo.Finado = obj2.Finado;
        //            datos_Modelo.Beneficiario = obj2.Beneficiario;
        //            listaDatosFamiliares.Add(datos_Modelo);
        //        }
        //        declaracion_model.datosfamiliares = listaDatosFamiliares;
        //        lista.Add(declaracion_model);
        //    }
        //    return lista;
        //}


        // POST: api/GetDeclaracion
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetDeclaracion/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetDeclaracion/5
        public void Delete(int id)
        {
        }
    }
}
