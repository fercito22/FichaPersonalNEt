using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebFichaPersonal.Data;
using WebFichaPersonal.Logic;
using WebAppEmberServicio.Models;
using Newtonsoft.Json;

namespace WebAppEmberServicio.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")] //"GET,POST,PUT")]
    public class booksController : ApiController
    {
        // GET: api/books
        //public IEnumerable<string> Get()
        public IHttpActionResult Getbook() //int id)
        {
            //return new string[] { "value1", "value2" };
            List<SPA_Libros_Result> listaLibros = GetFichaPersonalMgr.Instancia.getLibros();
            return Json(listaLibros);
        }

        // GET: api/books/5
        public IHttpActionResult Getbook(int id) //int id)
        {
            List<SPA_Libros_Result> listaLibros = GetFichaPersonalMgr.Instancia.getLibros();
            return Json(listaLibros);
        }      

        [HttpPost]        
        public ResultModel Post([FromBody] Libro libro)
        {
            var dato = ActualizarLibro(libro.title, libro.author, libro.description, libro.id, libro.tipo);   
            return (dato);
        }


        public ResultModel ActualizarLibro(string Titulo, string Autor, string Descripcion, int id, int tipo)
        {
            LibroModelo ObjLibro = new LibroModelo();
            ObjLibro.titulo = Titulo;
            ObjLibro.autor = Autor;
            ObjLibro.descripcion = Descripcion;
            ObjLibro.tipo = tipo;
            ObjLibro.id = id;

            string jsonBachiller = JsonConvert.SerializeObject(ObjLibro);

            try
            {
                using (var db = new FichaPersonalEntities())
                {
                    db.SPA_CrearLibro(ObjLibro.titulo,
                                      ObjLibro.autor,
                                      ObjLibro.descripcion,
                                      ObjLibro.tipo,
                                      ObjLibro.id);
                    return new ResultModel
                    {
                        objeto = ObjLibro,
                        codigo = 1,
                        mensaje = "Se Guardo Exitosamente"
                    };
                }
            }
            catch (Exception e)
            {
                return new ResultModel
                {
                    objeto = ObjLibro,
                    codigo = -1,
                    mensaje = "Intentelo nuevamente"
                };
            }
        }    

        
        public class Libro
        {
            public string title { get; set; }
            public string author { get; set; }
            public string description { get; set; }
            public int tipo { get; set; }
            public int id { get; set; }
        }

       // [Route("api/books/Enabling/Update")]
        // PUT: api/books/5
        [HttpPut] 
        public void Put([FromBody]Libro libro)
        {
        }

        // DELETE: api/books/5
        public void Delete(int id)
        {
        }
    }

   
}
