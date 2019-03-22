using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models
{
    public class ControlDotacion
    {
        public ControlDotacion()
        {
            this.EmpleadoItems = new HashSet<EmpleadoItem>();
        }

        public int ControlDotacionID { get; set; }
        public Nullable<int> MesAlerta { get; set; }
        public string Estado { get; set; }
        public string EstadoDotacion { get; set; }
        public Nullable<System.DateTime> FechaInicial { get; set; }
        public Nullable<int> Frecuencia { get; set; }
        public Nullable<int> TipoMedida { get; set; }
        public Nullable<System.DateTime> FechaReg { get; set; }
        public Nullable<System.DateTime> FechaMod { get; set; }
        public string EstadoAprobado { get; set; }
        public Nullable<System.DateTime> FechaFin { get; set; }

        public virtual ICollection<EmpleadoItem> EmpleadoItems { get; set; }
    }
}