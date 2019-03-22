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
    public class ComboController : ApiController
    {
        // GET: api/Combo
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet]
        // GET: api/ComboIdioma
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Combo/ComboIdioma")]
        public IHttpActionResult Idiomas(int id )
        {
            List<SPA_ComboIdiomas_Result> listaIdiomas = ComboFichaPersonalMgr.Instancia.getIdiomas(id);
            return Json(listaIdiomas);
        }

        // GET: api/NivelAcademico
        [HttpGet]        
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Combo/NivelAcademico")]
        public IHttpActionResult NivelAcademico()
        {
            List<SPA_ComboNivelAcademico_Result> listaNivelAcademico = ComboFichaPersonalMgr.Instancia.getNivelAcademico();                 
            return Json(listaNivelAcademico);
        }

        // GET: api/ListaPaises
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Combo/ListaPaises")]
        public IHttpActionResult ListaPaises()
        {
            List<SPA_ComboPaises_Result> listaPaises = ComboFichaPersonalMgr.Instancia.getPaises();
            return Json(listaPaises);
        }

        // GET: api/Parentescos
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Combo/Parentesco")]
        public IHttpActionResult Parentesco()
        {
            List<SPA_ComboParentesco_Result> listaParentesco= ComboFichaPersonalMgr.Instancia.getParentecos();
            return Json(listaParentesco);
        }

        // GET: api/Vacunas
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Combo/Vacunas")]
        public IHttpActionResult Vacunas()
        {
            List<SPA_ComboVacunas_Result> listaVacunas = ComboFichaPersonalMgr.Instancia.getVacunas();
            return Json(listaVacunas);
        }

        // GET: api/AlergiasMedicas
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Combo/AlergiasMedicas")]
        public IHttpActionResult AlergiasMedicas()
        {
            List<SPA_ComboAlergiasMedicas_Result> listaAlergiasMedicas = ComboFichaPersonalMgr.Instancia.getAlergiasMedicas();
            return Json(listaAlergiasMedicas);
        }

        // GET: api/DepartamentosBolivia
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Combo/DepartamentosBolivia")]
        public IHttpActionResult DepartamentosBolivia()
        {
            List<SPA_ComboCiCiudad_Result> listaDepartamentosBolivia = ComboFichaPersonalMgr.Instancia.getDepartamentosBolivia();
            return Json(listaDepartamentosBolivia);
        }

        // GET: api/TipoLicencia
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Combo/TipoLicencia")]
        public IHttpActionResult TipoLicencia()
        {
            List<SPA_ComboTipoLicencia_Result> listaTipoLicencia = ComboFichaPersonalMgr.Instancia.getTipoLicencia();
            return Json(listaTipoLicencia);
        }

        // GET: api/FactorSanguineo
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Combo/FactorSanguineo")]
        public IHttpActionResult FactorSanguineo()
        {
            List<SPA_ComboFactor_Result> listaFactorSanguineo = ComboFichaPersonalMgr.Instancia.getFactorSanguineo();
            return Json(listaFactorSanguineo);
        }

        // GET: api/TipoColegio
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Combo/TipoColegio")]
        public IHttpActionResult TipoColegio()
        {
            List<SPA_ComboTipoColegio_Result> listaTipoColegio = ComboFichaPersonalMgr.Instancia.getTipoColegio();
            return Json(listaTipoColegio);
        }

        // GET: api/GradoColegio
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Combo/GradoColegio")]
        public IHttpActionResult GradoColegio()
        {
            List<SPA_ComboGradoColegio_Result> listaGradoColegio = ComboFichaPersonalMgr.Instancia.getGradoColegio();
            return Json(listaGradoColegio);
        }

        // GET: api/TipoDocumento
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Combo/TipoDocumento")]
        public IHttpActionResult TipoDocumento(int id)
        {
            List<SPA_ComboTipoDocumento_Result> listaTipoDocumento = ComboFichaPersonalMgr.Instancia.getTipoDocumento(id);
            return Json(listaTipoDocumento);
        }

        // GET: api/EstadoCivil
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Combo/EstadoCivil")]
        public IHttpActionResult EstadoCivil()
        {
            List<SPA_ComboEstadoCivil_Result> listaEstadoCivil = ComboFichaPersonalMgr.Instancia.getEstadoCivil();
            return Json(listaEstadoCivil);
        }

        // GET: api/Comunicacion
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("api/Combo/Comunicacion")]
        public IHttpActionResult Comunicacion(int id)
        {
            List<SPA_ComboComunicacion_Result> listaComunicacion = ComboFichaPersonalMgr.Instancia.getComunicacion(id);
            return Json(listaComunicacion);
        }

        // GET: api/Combo/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Combo
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Combo/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Combo/5
        public void Delete(int id)
        {
        }
    }
}
