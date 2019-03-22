using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models
{
    public class FormacionAcademicaModelo
    {
        public int empleadoID { get; set; }
        public int nivelAcademicoID { get; set; }
        public string titulo { get; set; }
        public string institucion { get; set; }
        public string fechainicio { get; set; }
        public string fechafin { get; set; }
        public int educacionSuperiorID { get; set; }        
        public int Identificador { get; set; }
    }
}