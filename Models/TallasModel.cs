using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models
{
    public class TallasModel
    {
        public string total { get; set; }
        public List<DetalleTallasModelo> datos { get; set; }
    }
}