using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models
{
    public class DocumentosModelo
    {
        public int empleadoID { get; set; }
        public int DocumentoID { get; set; }
        public string Numero { get; set; }
        public string FechaEmision { get; set; }
        public string FechaVencimiento { get; set; }                
        public string Observacion { get; set; }
        public int ConAlerta { get; set; }
        public string Estado { get; set; }
        public string Referencia { get; set; }
        public int DocumentoPersonalID { get; set; }
        public int Identificador { get; set; }
    }
}