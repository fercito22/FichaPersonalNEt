using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models
{
    public class EmpleadoItem
    {
        public int EmpleadoItemID { get; set; }
        public Nullable<int> DetallePaqueteID { get; set; }
        public string Estado { get; set; }
        public Nullable<System.DateTime> FechaReg { get; set; }
        public Nullable<int> GrupoEmpleadoID { get; set; }
        public string Talla { get; set; }
        public string CodTalla { get; set; }
        public Nullable<int> ControlDotacionID { get; set; }
        public Nullable<int> Cantidad { get; set; }
        public Nullable<int> CantidadItem { get; set; }
        public Nullable<System.DateTime> periodoDesde { get; set; }
        public Nullable<System.DateTime> periodoHasta { get; set; }

        public virtual ControlDotacion ControlDotacion { get; set; }
    }
}