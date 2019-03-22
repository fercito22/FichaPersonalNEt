using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models
{
    public class LibroModelo
    {        
        public string titulo { get; set; }
        public string autor { get; set; }
        public string descripcion { get; set; }
        public int tipo { get; set; }
        public int id { get; set; }
    }
}