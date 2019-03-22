using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebAppEmberServicio.Models;
using WebAppEmberServicio.Models.Comunicacion;
using WebFichaPersonal.Data;
using WebFichaPersonal.Logic;

namespace WebAppEmberServicio.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GetComunicacionController : ApiController
    {
        // GET: api/GetComunicacion
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetComunicacion/5
        public IHttpActionResult Get(int id)
        {
            List<SPA_GetComunicacion_Result> listaComunicacion = GetFichaPersonalMgr.Instancia.getComunicacion(id);
            return Json(listaComunicacion);
        }

        // POST: api/GetComunicacion
        [HttpPost]
        public ResultModel Post([FromBody] ComunicacionModelo comunicacion)
        {
            var dato = UpdateFichaPersonalMgr.Instancia.ActualizarComunicacion(comunicacion.empleadoID, comunicacion.tipoComunicacionID,
                                    comunicacion.Valor );
            return (dato);
        }


        // PUT: api/GetComunicacion/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetComunicacion/5
        public void Delete(int id)
        {
        }


        public List<FichaPersonalModelo> DetalleServicio(int id)
        {
            List<FichaPersonalModelo> lista = new List<FichaPersonalModelo>();

            List<SPA_GetComunicacion_Result> listaComunicacion = GetFichaPersonalMgr.Instancia.getComunicacion(id);
            List<int> listaFichas = listaComunicacion.Select(x => x.empleadoID).Distinct().ToList();
            foreach (var item in listaFichas)
            {
                SPA_GetComunicacion_Result obj = listaComunicacion.Where(x => x.empleadoID == item).FirstOrDefault();
                FichaPersonalModelo comunicacion_model = new FichaPersonalModelo();
                comunicacion_model.empleado = obj.empleadoID;
                List<DatosComunicacion> listaDatosComunicacion = new List<DatosComunicacion>();
                
                List<int> listaDatosComunicaciones = listaComunicacion.Where(x => x.empleadoID == item).Select(x => x.empleadoID).Distinct().ToList();

                foreach (var DatosComunicacion in listaDatosComunicaciones)
                {                    
                    SPA_GetComunicacion_Result obj2 = listaComunicacion.Where(x => x.empleadoID == DatosComunicacion).FirstOrDefault();
                    DatosComunicacion datos_Modelo = new DatosComunicacion();
                    datos_Modelo.Nombre = obj2.Nombre1;
                    datos_Modelo.Apellido = obj2.Apellido1;
                    datos_Modelo.Direccion = obj2.Direccion;

                    List<ContactoModelo> listaContactos = new List<ContactoModelo>();
                    List<int> listaContacto = listaComunicacion.Where(x => x.tipoComunicacionID == DatosComunicacion).Select(x => x.comunicacionID).Distinct().ToList();

                    foreach (var contacto in listaComunicacion.Where(x => x.empleadoID == DatosComunicacion))
                    {
                        listaContactos.Add(new ContactoModelo { Valor = contacto.Valor }); // +"-"+ contacto.tipoComunicacionID });
                    }
                    datos_Modelo.contacto = listaContactos;
                    listaDatosComunicacion.Add(datos_Modelo);
                }
                comunicacion_model.comunicacion = listaDatosComunicacion;
                lista.Add(comunicacion_model);
            }
            return lista;
        }

    }
}
