using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebFichaPersonal.Data;
using WebFichaPersonal.Logic;

namespace WebAppEmberServicio.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GetMemoController : ApiController
    {
        // GET: api/GetMemo
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetMemo/5
        public IHttpActionResult GetDocumentos(int id)
        {
            List<SPA_Memorandum_Result> listaCursos = GetFichaPersonalMgr.Instancia.getMemo(id);
            //var dato = DetalleServicio(id);
            return Json(listaCursos);
        }


        //public List<MemoModelo> DetalleServicio(int id)
        //{
        //    List<MemoModelo> lista = new List<MemoModelo>();

        //    List<SPA_Memorandum_Result> listaCursos = GetFichaPersonalMgr.Instancia.getMemo(id);
        //    List<int> listaDocumentosPersonales = listaCursos.Select(x => x.formularioID).Distinct().ToList();
        //    foreach (var item in listaDocumentosPersonales)
        //    {
        //        SPA_Memorandum_Result obj = listaCursos.Where(x => x.formularioID == item).FirstOrDefault();
        //        MemoModelo titulos_model = new MemoModelo();
        //        titulos_model.TipoMemo = obj.tipo_llamada_atecion;
        //        List<DatosMemosModelo> listaDatosCurso = new List<DatosMemosModelo>();

        //        List<int> listaDatosCursos = listaCursos.Where(x => x.formularioID == item).Select(x => x.formularioID).Distinct().ToList();

        //        foreach (var DatosTitulos in listaDatosCursos)
        //        {

        //            SPA_Memorandum_Result obj2 = listaCursos.Where(x => x.formularioID == DatosTitulos).FirstOrDefault();
        //            DatosMemosModelo entrenamiento_Modelo = new DatosMemosModelo();

        //            entrenamiento_Modelo.FechaEmision = obj2.fecha_emision;
        //            entrenamiento_Modelo.FechaVisacion = obj2.fecha_visacion;
        //            entrenamiento_Modelo.NumeroCite = obj2.numero_cite_sistema; // .ToString("dd MMM yyyy");
        //            entrenamiento_Modelo.MotivoMemo = obj2.motivo_llamada_atencion; //.ToString("dd MMM yyyy"); // ToString("dd MMM yyyy");
        //            entrenamiento_Modelo.NombreEmisor = obj2.nombre_emisor_memo;
        //            listaDatosCurso.Add(entrenamiento_Modelo);
        //        }
        //        titulos_model.datosmemo = listaDatosCurso;
        //        lista.Add(titulos_model);
        //    }
        //    return lista;
        //}


        // POST: api/GetMemo
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetMemo/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetMemo/5
        public void Delete(int id)
        {
        }
    }
}
