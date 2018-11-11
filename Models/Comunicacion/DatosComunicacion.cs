using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models.Comunicacion
{
    public class DatosComunicacion
    {
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Direccion { get; set; }
        public List<ContactoModelo> contacto { get; set; }
    }
}