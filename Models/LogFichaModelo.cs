using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models
{
    public class LogFichaModelo
    {
        public int IdTabla { get; set; }
        public string Tabla { get; set; }
        public string Tipo { get; set; }
        public string Objeto { get; set; }
        public DateTime Fecha { get; set; }
        public string Usuario { get; set; }
        public string IPs { get; set; }
        public string Sistema { get; set; }
    }
}