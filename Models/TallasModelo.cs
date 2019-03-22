using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models
{
    public class TallasModelo
    {
        public int EmpleadoItemID { get; set; }
        public int GrupoEmpleadoID { get; set; }
        public int DetallePaqueteID { get; set; }
        public string nombre { get; set; }
        public string item { get; set; }
        public string genero { get; set; }
        public int ControlDotacionID { get; set; }
        public string ConTalla { get; set; }
        public string CodTalla { get; set; }
        public string Validar { get; set; }

        public List<DetalleTallasModelo> ListaTallas { get; set; }
        public TallasModelo()
        {
            ListaTallas = new List<DetalleTallasModelo>();
        }
    }
}