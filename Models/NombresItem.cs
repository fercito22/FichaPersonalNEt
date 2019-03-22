using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppEmberServicio.Models
{
    public class NombresItem
    {
        public object nombre { get; set; }
        public string codigo { get; set; }
        public string nomItem
        {
            get
            {               
                nombre = nombre.ToString().Replace("Calzados~", "");
                return nombre.ToString().Replace("Prendas de Vestir~", "");
            }
        }
        public string nombreItem
        {
            get
            {
                string[] aux = nombre.ToString().Split('~');

                if (aux.Length == 3)
                {
                    return aux[2];
                }
                else if (aux.Length == 2)
                {
                    return aux[1];
                }
                else if (aux.Length == 1)
                {
                    return aux[0];
                }
                else
                {
                    return "";
                }
            }
        }

    }

    public class ResultModelErp<T>
    {
        public string total { get; set; }
        public List<T> datos { get; set; }
        public ResultModelErp()
        {
            datos = new List<T>();
        }
    }
}