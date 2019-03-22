using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

using WebAppEmberServicio.Models;
using WebAppEmberServicio.Models.Personal;
using WebFichaPersonal.Data;
using WebFichaPersonal.Logic;

namespace WebAppEmberServicio.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GetPerfilController : ApiController
    {
        
        // GET: api/GetPerfil/5
        public IHttpActionResult Get(int id)
        {
            //return "value";
            var dato = DetalleServicio(id);            
            return Json(dato);
        }


        public List<PersonalModelo> DetalleServicio(int id)
        {
            List<PersonalModelo> lista = new List<PersonalModelo>();

            List<SPA_DatosPersonales_Result> medicoCabecera = GetFichaPersonalMgr.Instancia.getPersonal(id);            
            List<int> listaMedicoCabecera = medicoCabecera.Select(x => x.empleadoID).Distinct().ToList();
            foreach (var item in listaMedicoCabecera)
            {
                SPA_DatosPersonales_Result obj = medicoCabecera.Where(x => x.empleadoID == item).FirstOrDefault();
                PersonalModelo documento_model = new PersonalModelo();
                documento_model.Nombres = obj.Nombre1;
                documento_model.ApellidoPaterno = obj.Apellido1;
                documento_model.ApellidoMaterno = obj.Apellido2;
                documento_model.FechaNacimiento = obj.FechaNacimiento;
                documento_model.EstadoCivil = obj.EstadoCivil;
                documento_model.LugarNacimiento = obj.LugarDeNacimiento;
                documento_model.Fotografia = obj.Foto;
                documento_model.Genero = obj.Genero;
                lista.Add(documento_model);
            }
            return lista;
        }    

        // POST: api/GetPerfil        
        [HttpPost]
        public ResultModel Post([FromBody] PerfilModelo perfil)
        {
            var dato = ActualizarPerfil( perfil.empleadoID, perfil.Nombre1, perfil.Apellido1, perfil.Apellido2,
                perfil.FechaNacimiento, perfil.Nacionalidad, perfil.CiudadNacimiento, perfil.LugarDeNacimiento,
                perfil.Direccion, perfil.EstadoCivil );

            return (dato);
        }
        
        public ResultModel ActualizarPerfil(int empleadoID, string Nombre1, string Apellido1, string Apellido2,
                string FechaNacimiento, string Nacionalidad, string CiudadNacimiento ,string LugarDeNacimiento,
                string Direccion, int EstadoCivil)
        {
            PerfilModelo ObjPerfil = new PerfilModelo();
           
            string jsonPerfil = JsonConvert.SerializeObject(ObjPerfil);

            try
            {
                using (var db = new FichaPersonalEntities())
                {                    
                    db.SPA_ActualizarPerfil(
                    ObjPerfil.empleadoID = empleadoID,
                    ObjPerfil.Nombre1 = Nombre1,
                    ObjPerfil.Apellido1 = Apellido1,
                    ObjPerfil.Apellido2 = Apellido2,
                    ObjPerfil.FechaNacimiento = FechaNacimiento,
                    ObjPerfil.Nacionalidad = Nacionalidad,
                    ObjPerfil.CiudadNacimiento = "",
                    ObjPerfil.LugarDeNacimiento = LugarDeNacimiento,
                    ObjPerfil.Direccion = Direccion,
                    ObjPerfil.EstadoCivil = EstadoCivil);
                    return new ResultModel
                    {
                        objeto = ObjPerfil,
                        codigo = 1,
                        mensaje = "Se Guardo Exitosamente"
                    };
                }
            }
            catch (Exception e)
            {
                return new ResultModel
                {
                    objeto = ObjPerfil,
                    codigo = -1,
                    mensaje = "Intentelo nuevamente"
                };
            }
        }

        // PUT: api/GetPerfil/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetPerfil/5
        public void Delete(int id)
        {
        }
    }
}
