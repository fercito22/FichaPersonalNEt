using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Configuration;
using System.Web.Http.Results;
using System.Web.Mvc;
using WebFichaPersonal.Data;
using WebFichaPersonal.Logic;

namespace WebAppEmberServicio.Models
{
    public class UpdateFichaPersonalMgr
    {

        #region Singleton
        private static object locker = new object();
        private static volatile UpdateFichaPersonalMgr innerInstance = null;

        public static UpdateFichaPersonalMgr Instancia
        {
            get
            {
                if (null == innerInstance)
                {
                    lock (locker)
                    {
                        if (null == innerInstance)
                        {
                            innerInstance = new UpdateFichaPersonalMgr();
                        }
                    }
                }
                return innerInstance;
            }
        }
        protected UpdateFichaPersonalMgr() { }
        #endregion
        //----------------------------
        //      IDITAR PERFIL
        //----------------------------

        //public ResultModel ActualizarPerfil(int id, int tipo, int empleadoID, string Nombre1, string Apellido1, string Apellido2,
        //        string FechaNacimiento, string edad, string Genero, string Nacionalidad, string LugarDeNacimiento,
        //        string Direccion, int EstadoCivil, string comunicacionID, string Nombre, string Valor, string Descripcion)
        public ResultModel ActualizarPerfil(int empleadoID, string Nombre1, string Apellido1, string Apellido2,
                string FechaNacimiento, string Nacionalidad, string CiudadNacimiento, string LugarDeNacimiento,
                string Direccion, int EstadoCivil)
        {
            PerfilModelo ObjPerfil = new PerfilModelo();
            //ObjPerfil.id = id;
            //ObjPerfil.tipo = tipo;
            //ObjPerfil.empleadoID = empleadoID;
            //ObjPerfil.Nombre1 = Nombre1;
            //ObjPerfil.Apellido1 = Apellido1;
            //ObjPerfil.Apellido2 = Apellido2;
            //ObjPerfil.FechaNacimiento = FechaNacimiento;
            //ObjPerfil.edad = edad;
            //ObjPerfil.Genero = Genero;
            //ObjPerfil.Nacionalidad = Nacionalidad;
            //ObjPerfil.LugarDeNacimiento = LugarDeNacimiento;
            //ObjPerfil.Direccion = Direccion;
            //ObjPerfil.EstadoCivil = EstadoCivil;
            //ObjPerfil.comunicacionID = comunicacionID;
            //ObjPerfil.Nombre = Nombre;
            //ObjPerfil.Valor = Valor;
            //ObjPerfil.Descripcion = Descripcion;

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
                    ObjPerfil.CiudadNacimiento = CiudadNacimiento,
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

        //----------------------------
        //      IDITAR Idioma
        //----------------------------

        public ResultModel ActualizarIdioma(int empleadoID, int idiomaID, int lee, int habla,
               int escribe, int Identificador)
        {
            IdiomaModelo ObjIdioma = new IdiomaModelo();
            string jsonPerfil = JsonConvert.SerializeObject(ObjIdioma);
            try
            {
                using (var db = new FichaPersonalEntities())
                {
                    var idioma = db.SPA_ConsultarIdioma(empleadoID, idiomaID).FirstOrDefault();
                    if(idioma != null)
                    {
                        if (Identificador != 3)
                        {
                            Identificador = 1;
                        }                        
                    }
                    else
                    {
                        Identificador = 0;
                    }
                    
                    db.SPA_ActualizarIdioma(
                    ObjIdioma.empleadoID = empleadoID,
                    ObjIdioma.idiomaID = idiomaID,
                    ObjIdioma.lee = lee,
                    ObjIdioma.habla = habla,
                    ObjIdioma.escribe = escribe,
                    ObjIdioma.Identificador = Identificador
                    );
                    string mensaje = "";
                    if (Identificador != 3)
                    {
                        mensaje = "Se Guardo Exitosamente";
                    }
                    else
                    {
                        mensaje = "Se Elimino";
                    }
                    return new ResultModel
                    {
                        objeto = ObjIdioma,
                        codigo = 1,
                        mensaje = mensaje
                    };
                }
            }
            catch (Exception e)
            {
                return new ResultModel
                {
                    objeto = ObjIdioma,
                    codigo = -1,
                    mensaje = "Intentelo nuevamente"
                };
            }
        }

        //----------------------------
        //      IDITAR Comunicacion
        //----------------------------

        public ResultModel ActualizarComunicacion(int empleadoID, int tipoComunicacionID, string Valor)
        {
            ComunicacionModelo ObjComunicacion = new ComunicacionModelo();
            string jsonPerfil = JsonConvert.SerializeObject(ObjComunicacion);
            int Identificador = 0;
            try
            {
                using (var db = new FichaPersonalEntities())
                {
                    var comunicacion = db.SPA_ConsultarComunicacion(empleadoID, tipoComunicacionID).FirstOrDefault();
                    if (comunicacion != null)
                    {
                        if (Identificador != 3)
                        {
                            Identificador = 1;
                        }
                    }
                    else
                    {
                        Identificador = 0;
                    }

                    db.SPA_ActualizarComunicacion(
                    ObjComunicacion.empleadoID = empleadoID,
                    ObjComunicacion.tipoComunicacionID = tipoComunicacionID,
                    ObjComunicacion.Valor = Valor,
                    ObjComunicacion.Identificador = Identificador
                    );
                    return new ResultModel
                    {
                        objeto = ObjComunicacion,
                        codigo = 1,
                        mensaje = "Se Guardo Exitosamente"
                    };
                }
            }
            catch (Exception e)
            {
                return new ResultModel
                {
                    objeto = ObjComunicacion,
                    codigo = -1,
                    mensaje = "Intentelo nuevamente"
                };
            }
        }


        //----------------------------
        //      IDITAR Bachiller
        //----------------------------              

        public ResultModel ActualizarBachiller(int empleadoID, string NombreColegio, string Lugar, string TipoColegio,
                                string UltimoCursoVencido, int Identificador)
        {
            BachillerModelo ObjBachiller = new BachillerModelo();
            string jsonPerfil = JsonConvert.SerializeObject(ObjBachiller);
            //var Identificador = 0;
            try
            {
                using (var db = new FichaPersonalEntities())
                {
                    var comunicacion = db.SPA_GetBachillerato(empleadoID ).FirstOrDefault();
                    if (comunicacion != null)
                    {
                        if (Identificador != 3)
                        {
                            Identificador = 1;
                        }
                    }
                    else
                    {
                        Identificador = 0;
                    }

                    db.SPA_ActualizarBachillerato(
                    ObjBachiller.empleadoID = empleadoID,
                    ObjBachiller.NombreColegio = NombreColegio,
                    ObjBachiller.Lugar = Lugar,
                    ObjBachiller.TipoColegio = TipoColegio,
                    ObjBachiller.UltimoCursoVencido = UltimoCursoVencido,
                    ObjBachiller.Identificador = Identificador
                    );
                    return new ResultModel
                    {
                        objeto = ObjBachiller,
                        codigo = 1,
                        mensaje = "Se Guardo Exitosamente"
                    };
                }
            }
            catch (Exception e)
            {
                return new ResultModel
                {
                    objeto = ObjBachiller,
                    codigo = -1,
                    mensaje = "Intentelo nuevamente"
                };
            }
        }
                      

        //----------------------------
        //      IDITAR ContactoEmergencia
        //----------------------------              

        public ResultModel ActualizarContactoEmergencia(int empleadoID, string NombreContacto, string Relacion,
                        string Direccion, string TelefonoDomicilio, string DireccionTrabajo, string TelefonoTrabajo,
                          string NroCelular, int Identificador)
        {
            ContactoEmergenciaModelo ObjContacto = new ContactoEmergenciaModelo();
            string jsonPerfil = JsonConvert.SerializeObject(ObjContacto);
            //var Identificador = 0;
            try
            {
                using (var db = new FichaPersonalEntities())
                {
                    var comunicacion = db.SPA_GetContactoEmergencia(empleadoID).FirstOrDefault();
                    if (comunicacion != null)
                    {                        
                            Identificador = 1;
                    }
                    else
                    {
                        Identificador = 0;
                    }

                    db.SPA_ActualizarContactoEmergencia(
                    ObjContacto.empleadoID = empleadoID,
                    ObjContacto.NombreContacto = NombreContacto,
                    ObjContacto.Relacion = Relacion,
                    ObjContacto.Direccion = Direccion,
                    ObjContacto.TelefonoDomicilio = TelefonoDomicilio,
                    ObjContacto.DireccionTrabajo = DireccionTrabajo,
                    ObjContacto.TelefonoTrabajo = TelefonoTrabajo,
                    ObjContacto.NroCelular = NroCelular,
                    ObjContacto.Identificador = Identificador
                    );
                    return new ResultModel
                    {
                        objeto = ObjContacto,
                        codigo = 1,
                        mensaje = "Se Guardo Exitosamente"
                    };
                }
            }
            catch (Exception e)
            {
                return new ResultModel
                {
                    objeto = ObjContacto,
                    codigo = -1,
                    mensaje = "Intentelo nuevamente"
                };
            }
        }
        

        //----------------------------
        //      IDITAR Documento
        //----------------------------              

        public ResultModel ActualizarDocumento(int empleadoID, int DocumentoID, string Numero, string FechaEmision,
                    string FechaVencimiento, string Observacion, int ConAlerta, string Estado, string Referencia, int DocumentoPersonalID, int Identificador)
        {
            {
                DocumentosModelo ObjDocumento = new DocumentosModelo();
                if(Observacion == null)
                {
                    Observacion = "";
                }
                if(DocumentoID == 9)
                {
                    if (Referencia == "1")
                    {
                        Numero = "FIEBRE AMARILLA";
                    }
                    else
                    {
                        Numero = "TETANOS";
                    }
                }
                //string ReferenciaBan = "";
                //if (DocumentoID == 9 || DocumentoID == 12 || DocumentoID == 5 || DocumentoID == 6 || DocumentoID == 22)
                //{
                //    string[] RefLis = Referencia.Split('-');
                //    Referencia = RefLis[0];
                //    ReferenciaBan = RefLis[1];
                //}
                //else
                //{
                //    ReferenciaBan = Referencia;
                //}
                

                string jsonPerfil = JsonConvert.SerializeObject(ObjDocumento);


                try
                {
                    using (var db = new FichaPersonalEntities())
                    {
                        db.SPA_ActualizarDocumentosPersonales(
                        ObjDocumento.empleadoID = empleadoID,
                        ObjDocumento.DocumentoID = DocumentoID,
                        ObjDocumento.Numero = Numero,
                        ObjDocumento.FechaEmision = FechaEmision,
                        ObjDocumento.FechaVencimiento = FechaVencimiento,
                        ObjDocumento.Observacion = Observacion,
                        ObjDocumento.ConAlerta = ConAlerta,
                        ObjDocumento.Estado = Estado,
                        ObjDocumento.Referencia = Referencia,
                        ObjDocumento.DocumentoPersonalID = DocumentoPersonalID,
                        ObjDocumento.Identificador = Identificador
                        );
                        return new ResultModel
                        {
                            objeto = ObjDocumento,
                            codigo = 1,
                            mensaje = "Se Guardo Exitosamente"
                        };
                    }
                }
                catch (Exception e)
                {
                    return new ResultModel
                    {
                        objeto = ObjDocumento,
                        codigo = -1,
                        mensaje = "Intentelo nuevamente"
                    };
                }
            }
        }


        //----------------------------
        //      IDITAR Documento
        //----------------------------              

        public ResultModel ActualizarFormacionAcademica(int empleadoID, int nivelAcademicoID, string titulo, string institucion,
                    string fechainicio, string fechafin,int educacionSuperiorID, int Identificador)
        {
            {
                FormacionAcademicaModelo ObjFormacion = new FormacionAcademicaModelo();

                string jsonPerfil = JsonConvert.SerializeObject(ObjFormacion);

                try
                {
                    using (var db = new FichaPersonalEntities())
                    {
                        db.SPA_ActualizarTitulo(
                        ObjFormacion.empleadoID = empleadoID,
                        ObjFormacion.nivelAcademicoID = nivelAcademicoID,
                        ObjFormacion.titulo = titulo,
                        ObjFormacion.institucion = institucion,
                        ObjFormacion.fechainicio = fechainicio,
                        ObjFormacion.fechafin = fechafin,
                        ObjFormacion.educacionSuperiorID = educacionSuperiorID,                        
                        ObjFormacion.Identificador = Identificador
                        );
                        return new ResultModel
                        {
                            objeto = ObjFormacion,
                            codigo = 1,
                            mensaje = "Se Guardo Exitosamente"
                        };
                    }
                }
                catch (Exception e)
                {
                    return new ResultModel
                    {
                        objeto = ObjFormacion,
                        codigo = -1,
                        mensaje = "Intentelo nuevamente"
                    };
                }
            }
        }



        //----------------------------
        //      IDITAR Medico Cabecera
        //----------------------------

        public ResultModel ActualizarMedico(int empleadoID, string NombreMedico, string TelefonoMedico, string Nrocelular,
                string AlergiasMedicas, string Medicamentos, string DireccionMedico, string GrupoSanquineo, string RH_Sanguineo, int Identificador)
        {
            MedicoCabeceraModelo ObjMedico = new MedicoCabeceraModelo();
            string jsonPerfil = JsonConvert.SerializeObject(ObjMedico);
            try
            {
                using (var db = new FichaPersonalEntities())
                {
                    var idioma = db.SPA_GetMedicoCabecera(empleadoID).FirstOrDefault();
                    if (idioma != null)
                    {                        
                         Identificador = 1;
                    }
                    else
                    {
                        Identificador = 0;
                    }

                    db.SPA_ActualizarMedicoCabecera(
                    ObjMedico.empleadoID = empleadoID,
                    ObjMedico.NombreMedico = NombreMedico,
                    ObjMedico.TelefonoMedico = TelefonoMedico,
                    ObjMedico.Nrocelular = Nrocelular,
                    ObjMedico.AlergiasMedicas = AlergiasMedicas,
                    ObjMedico.Medicamentos = Medicamentos,
                    ObjMedico.DireccionMedico = DireccionMedico,
                    ObjMedico.GrupoSanquineo = GrupoSanquineo,
                    ObjMedico.RH_Sanguineo = RH_Sanguineo,
                    ObjMedico.Identificador = Identificador
                    );
                    return new ResultModel
                    {
                        objeto = ObjMedico,
                        codigo = 1,
                        mensaje = "Se Guardo Exitosamente"
                    };
                }
            }
            catch (Exception e)
            {
                return new ResultModel
                {
                    objeto = ObjMedico,
                    codigo = -1,
                    mensaje = "Intentelo nuevamente"
                };
            }
        }



        //----------------------------
        //      IDITAR Beneficiario
        //----------------------------

        public ResultModel ActualizarBeneficiario(int empleadoID, int datosFamiliaresID, int parentescoID, string Nombres,
                    string Apellido1, string Apellido2, string Tipo_NroDocumento, int Estado,
                    int Finado, int Identificador)
        {
            BeneficiarioModelo ObjBeneficiario = new BeneficiarioModelo();
            string jsonPerfil = JsonConvert.SerializeObject(ObjBeneficiario);
            try
            {
                using (var db = new FichaPersonalEntities())
                {
                    var declaracion = db.SPA_GetDeclaracion(empleadoID).FirstOrDefault();
                    if (declaracion != null)
                    {
                        
                        if (datosFamiliaresID == 0)
                        {
                            Identificador = 0;
                        }
                        else
                        {
                            //Identificador = 1;
                            if (Identificador != 3)
                            {
                                Identificador = 1;
                            }
                        }
                        
                    }
                    else
                    {
                        Identificador = 0;
                    }

                    db.SPA_ActualizarDeclaracion(
                    ObjBeneficiario.empleadoID = empleadoID,
                    ObjBeneficiario.datosFamiliaresID = datosFamiliaresID,
                    ObjBeneficiario.parentescoID = parentescoID,
                    ObjBeneficiario.Nombres = Nombres,
                    ObjBeneficiario.Apellido1 = Apellido1,
                    ObjBeneficiario.Apellido2 = Apellido2,
                    ObjBeneficiario.Genero = "",
                    ObjBeneficiario.FechaNacimiento = DateTime.Now.ToString("yyyy/MM/dd"),
                    ObjBeneficiario.LugarNacimiento = "",
                    ObjBeneficiario.Nacionalidad = "",
                    ObjBeneficiario.Tipo_NroDocumento = Tipo_NroDocumento,
                    ObjBeneficiario.Beneficiario = 0,
                    ObjBeneficiario.Estado = 1,
                    ObjBeneficiario.Finado = Finado,
                    ObjBeneficiario.Identificador = Identificador
                    );

                    string mensaje = "";
                    if (Identificador != 3)
                    {
                        mensaje = "Se Guardo Exitosamente";
                    }
                    else
                    {
                        mensaje = "Se Elimino exitosamente";
                    }


                    return new ResultModel
                    {
                        objeto = ObjBeneficiario,
                        codigo = 1,
                        mensaje = mensaje
                    };
                }
            }
            catch (Exception e)
            {
                return new ResultModel
                {
                    objeto = ObjBeneficiario,
                    codigo = -1,
                    mensaje = "Intentelo nuevamente"
                };
            }
        }


        //---------------
        // Tallas
        //---------------

        private static string UrlBase = "http://erp.obairlines.bo/pxp/lib/rest/";



        public List<TallasModelo> RegistrarTallas(string id, string pass)
        {
            List<TallasModelo> lista = new List<TallasModelo>();
            using (var db = new DotacionUniformeEntities())
            {
                var validador = db.SPA_ValidaHabilitacionModTallas(int.Parse(id.Split('-')[0])).First();
                var ids = int.Parse(id);
                lista = (from x in db.SP_GetItemTallasEmpleado(ids, 0)
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


        public ResultModel ActualizarTallasEmpleado(int id, string codTalla, string nombre)
        {
            UpdateTallaModelo talla = new UpdateTallaModelo();
            talla.id = id;
            talla.codTalla = codTalla;
            talla.nombre = nombre;

            string jsonPerfil = JsonConvert.SerializeObject(talla);

            try
            {
                // TODO: Add insert logic here
                //DateTime fechaIni = DateTime.Parse(model.FechaInicial);
                using (var db = new DotacionUniformeEntities())
                {
                    var update = db.EmpleadoItem.Where(m => m.EmpleadoItemID == id).FirstOrDefault();
                    if (update != null)
                    {
                        update.CodTalla = codTalla;
                        update.Talla = nombre;
                        db.SaveChanges();
                        //db.SP_GuardarBitacora("UPDATE", Utiles.WebMgr.Instancia.GetIp(), User.Identity.Name, EntityToString(update), "");
                        db.SP_GuardarBitacora("UPDATE", "123", "fernando", EntityToString(update), "");
                       // LogTransaccionalMgr.Instancia.LogFichaPersonal(id, "EmpleadoItem", "MODIFICADO", jsonPerfil, "FICHA PERSONAL");
                        return new ResultModel
                        {
                            objeto = null,
                            codigo = 1,
                            mensaje = "Se Guardo Exitosamente"
                        };
                    }
                    else
                    {
                        return new ResultModel
                        {
                            objeto = null,
                            codigo = -1,
                            mensaje = "Intentelo nuevamente"
                        };
                    }
                }
            }

            catch (Exception ex)
            {
                return new ResultModel
                {
                    objeto = null,
                    codigo = -1,
                    mensaje = "Intentelo nuevamente"
                };
            }
        }

        public string EntityToString(object entity)
        {
            Type myType = entity.GetType();
            DateTime fechaReg = DateTime.Now;
            IList<PropertyInfo> props = new List<PropertyInfo>(myType.GetProperties());
            string tabla = myType.Name;
            string objetoT = tabla + "=> ";
            PropertyInfo[] info = myType.GetProperties(BindingFlags.Instance | BindingFlags.Public).Where(m => m.PropertyType.Namespace == "System").ToArray();
            foreach (PropertyInfo propInfo in info)
            {
                object val = propInfo.GetValue(entity, null);
                if (val != null)
                {
                    objetoT += propInfo.Name + "=" + val + " ";
                }
            }

            return objetoT;
        }
      
        public List<SPA_ComboDetalleDotacion_Result> comboDetalleDotacionEmp()
        {
            List<SPA_ComboDetalleDotacion_Result> lista = null;
            try
            {
                using (var db = new FichaPersonalEntities())
                {
                    lista = db.SPA_ComboDetalleDotacion().ToList();
                }
            }
            catch (Exception e)
            {
                lista = null;
            }
            return lista;
        }

        public ResultModel GetDetalleDotacionEmp(int controlDotacionID, int id, string pass)
        {
            List<SP_GetDetalleDotacionEmpFicha_Result> lista = new List<SP_GetDetalleDotacionEmpFicha_Result>();
            if (id != 0)
            {
                using (var db = new DotacionUniformeEntities())
                {
                    db.Configuration.LazyLoadingEnabled = false;
                    db.Configuration.ProxyCreationEnabled = false;
                    if (id != 0)
                    {
                        lista = db.SP_GetDetalleDotacionEmpFicha(id, controlDotacionID).ToList();
                        int contador = 0;
                        //lista.Add;
                        if (lista.Count > 0)
                        {
                            var data = GetNombresPorCodTalla(pass, string.Join(",", lista.Select(m => m.CodTalla)));
                            for (int i = 0; i < lista.Count; i++)
                            {                                
                                var nombre = data.Where(m => m.codigo == lista[i].CodTalla).FirstOrDefault();
                                lista[i].prenda = nombre != null ? nombre.nomItem : lista[i].prenda;
                                lista[i].fechaMov = Convert.ToDateTime(lista[i].fechaMov).ToString("dd/MM/yyyy");
                                lista[i].usuario = ""+i ;
                               // lista[i].contador = i;
                            }

                        }
                    }
                }
            }
            return new ResultModel
            {
                objeto = lista,
                codigo = 1,
                mensaje = "Se Guardo Exitosamente"
            };
            //return Json(new { data = lista }, JsonRequestBehavior.AllowGet);
        }

        private JsonResult Json(object p, JsonRequestBehavior allowGet)
        {
            throw new NotImplementedException();
        }

        public List<NombresItem> GetNombresPorCodTalla(string pass, string codigos)
        {
            string userERP = WebConfigurationManager.AppSettings["userEnde"];
            string uri = UrlBase + "almacenes/Item/nombreClasificacionItems";
            Dictionary<string, string> parametros = new Dictionary<string, string>();
            parametros.Add("codigos", codigos);
            string jsonString = REST.GetResponse_POST(uri, parametros, "application/x-www-form-urlencoded", userERP, pass);

            NombresItem data = new NombresItem();

            ResultModelErp<NombresItem> resultado = JsonConvert.DeserializeObject<ResultModelErp<NombresItem>>(jsonString);
            //return data;
            //ResultModelErp<NombresItem> resultado = JsonConvert.DeserializeObject<NombresItem>(jsonString);
            //return data;
            //ResultModelErp<NombresItem> resultado = new JavaScriptSerializer()
            // .Deserialize<ResultModelErp<NombresItem>>(jsonString);
            return resultado.datos;// string.Join(",", resultado.datos.Select(m => m.id_funcionario));
        }





    }

    internal class JavaScriptSerializer
    {
        public JavaScriptSerializer()
        {
        }

        internal T Deserialize<T>(string jsonString)
        {
            throw new NotImplementedException();
        }
    }
}