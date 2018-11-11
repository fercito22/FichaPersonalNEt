using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models.Comunicacion
{
    public class FichaPersonalModelo
    {
        public int empleado { get; set; }

        public List<DatosComunicacion> comunicacion { get; set; }
    }
}