using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models
{
    public class MedicoCabeceraModelo
    {
        public int empleadoID { get; set; }
        public string NombreMedico { get; set; }
        public string TelefonoMedico { get; set; }
        public string Nrocelular { get; set; }
        public string AlergiasMedicas { get; set; }
        public string Medicamentos { get; set; }
        public string DireccionMedico { get; set; }
        public string GrupoSanquineo { get; set; }
        public string RH_Sanguineo { get; set; }
        public int Identificador { get; set; }
    }
}