using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models
{
    public class PerfilModelo
    {        
        public int tipo { get; set; }
        public int empleadoID { get; set; }
        public string Nombre1 { get; set; }
        public string Apellido1 { get; set; }
        public string Apellido2 { get; set; }
        public string FechaNacimiento { get; set; }
        public string Nacionalidad { get; set; }
        public string LugarDeNacimiento { get; set; }
        public string CiudadNacimiento { get; set; }
        public string Direccion { get; set; }
        public int EstadoCivil { get; set; }
        //public string edad { get; set; }
        //public string Genero { get; set; }

        //public string comunicacionID { get; set; }
        //public string tipoComunicacionID { get; set; }
        //public string Nombre { get; set; }
        //public string Valor { get; set; }
        //public string Descripcion { get; set; }

    }
}