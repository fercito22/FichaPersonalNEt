using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models
{
    public class ComunicacionModelo
    {
        public int empleadoID { get; set; }
        public int tipoComunicacionID { get; set; }
        public String Valor { get; set; }
        public int Identificador { get; set; }
    }
}