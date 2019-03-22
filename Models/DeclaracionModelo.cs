using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models
{
    public class DeclaracionModelo
    {
        public int empleadoID { get; set; }
        public int datosFamiliaresID { get; set; }
        public int parentescoID { get; set; }
        public string Nombres { get; set; }
        public string Apellido1 { get; set; }
        public string Apellido2 { get; set; }
        public string Tipo_NroDocumento { get; set; }
        public int Beneficiario { get; set; }
        public int Estado { get; set; }
        public int Finado { get; set; }
        public int Identificador { get; set; }
    }
}