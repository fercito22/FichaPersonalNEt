using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models
{
    public class ContactoEmergenciaModelo
    {
        public int empleadoID { get; set; }
        public string NombreContacto { get; set; }
        public string Relacion { get; set; }
        public string Direccion { get; set; }
        public string TelefonoDomicilio { get; set; }
        public string DireccionTrabajo { get; set; }
        public string TelefonoTrabajo { get; set; }
        public string NroCelular { get; set; }
        public int Identificador { get; set; }
    }
}