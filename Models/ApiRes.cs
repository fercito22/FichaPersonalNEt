using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

namespace WebAppEmberServicio.Models
{
    public class REST
    {
        public enum Method { GET, POST }

        /*

        // Ejemplo de uso
         
       
         
        */

        /// <summary>
        /// Realiza el envio de parametros a un servicio web utilizando el metodo GET o POST
        /// </summary>
        /// <param name="urlBase">url del servicio</param>
        /// <param name="parameters">pares clave-valor que se enviaran</param>
        /// <param name="method">GET | POST</param>
        /// <param name="contentType">tipo de retorno</param>
        /// <returns>devuelve una cadena con la respuesta del servidor, o excepción si no funcionó</returns>
        /// <author>Findemor http://findemor.porExpertos.es</author>
        /// <history>Creado 17/02/2012</history>
        public static string GetResponse(string urlBase, Dictionary<string, string> parameters, Method method, string contentType, string user, string pass)
        {
            switch (method)
            {
                case Method.GET:
                    return GetResponse_GET(urlBase, parameters, contentType, user, pass);
                case Method.POST:
                    return GetResponse_POST(urlBase, parameters, contentType, user, pass);
                default:
                    throw new NotImplementedException();
            }
        }

        /// <summary>
        /// Concatena los parámetros a una cadena de texto compatible con el API Rest
        /// </summary>
        /// <param name="parameters"></param>
        /// <returns>Parametros concatenados en formato URL, no establece el caracter "?" al principio
        /// pero sí los "&" separadores</returns>
        /// <author>Findemor http://findemor.porExpertos.es</author>
        /// <history>Creado 17/02/2012</history>
        private static string ConcatParams(Dictionary<string, string> parameters)
        {
            bool FirstParam = true;
            StringBuilder Parametros = null;

            if (parameters != null)
            {
                Parametros = new StringBuilder();
                foreach (KeyValuePair<string, string> param in parameters)
                {
                    Parametros.Append(FirstParam ? "" : "&");
                    Parametros.Append(param.Key + "=" + HttpUtility.UrlEncode(param.Value));
                    FirstParam = false;
                }
            }

            return Parametros == null ? string.Empty : Parametros.ToString();
        }


        /// <summary>
        /// Realiza la peticion utilizando el método GET y devuelve la respuesta del servidor
        /// </summary>
        /// <param name="url"></param>
        /// <returns></returns>
        /// <author>Findemor http://findemor.porExpertos.es</author>
        /// <history>Creado 17/02/2012</history>
        public static string GetResponse_GET(string url, Dictionary<string, string> parameters, string contentType, string user, string pass)
        {
            try
            {
                //Concatenamos los parametros, OJO: antes del primero debe estar el caracter "?"
                string parametrosConcatenados = ConcatParams(parameters);
                string urlConParametros = url + "?" + parametrosConcatenados;

                System.Net.WebRequest wr = (System.Net.HttpWebRequest)System.Net.WebRequest.Create(urlConParametros);
                wr.Method = "GET";
                wr.Headers.Add("Pxp-User", user);
                wr.Headers.Add("Php-Auth-User", user);
                wr.Headers.Add("Php-Auth-Pw", pass);
                wr.ContentType = contentType;//"application/x-www-form-urlencoded";

                System.IO.Stream newStream;
                // Obtiene la respuesta
                System.Net.WebResponse response = wr.GetResponse();
                // Stream con el contenido recibido del servidor
                newStream = response.GetResponseStream();
                System.IO.StreamReader reader = new System.IO.StreamReader(newStream);
                // Leemos el contenido
                string responseFromServer = reader.ReadToEnd();

                // Cerramos los streams
                reader.Close();
                newStream.Close();
                response.Close();
                return responseFromServer;
            }
            catch (Exception ex)
            {
                if (ex.HResult == 404)
                    throw new Exception("Not found remote service " + url);
                else throw ex;
            }
        }


        /// <summary>
        /// Realiza la petición utilizando el método POST y devuelve la respuesta del servidor
        /// </summary>
        /// <param name="url"></param>
        /// <returns></returns>
        /// <author>Findemor http://findemor.porExpertos.es</author>
        /// <history>Creado 17/02/2012</history>
        public static string GetResponse_POST(string url, Dictionary<string, string> parameters, string contentType, string user, string pass)
        {
            try
            {
                //Concatenamos los parametros, OJO: NO se añade el caracter "?"
                string parametrosConcatenados = ConcatParams(parameters);

                System.Net.WebRequest wr = (System.Net.HttpWebRequest)System.Net.WebRequest.Create(url);
                wr.Method = "POST";

                wr.ContentType = contentType;//"application/x-www-form-urlencoded";

                System.IO.Stream newStream;
                //Codificación del mensaje
                System.Text.ASCIIEncoding encoding = new System.Text.ASCIIEncoding();
                byte[] byte1 = encoding.GetBytes(parametrosConcatenados);
                wr.ContentLength = byte1.Length;
                wr.Headers.Add("Pxp-User", user);
                wr.Headers.Add("Php-Auth-User", user);
                wr.Headers.Add("Php-Auth-Pw", pass);
                //Envio de parametros
                newStream = wr.GetRequestStream();
                newStream.Write(byte1, 0, byte1.Length);

                // Obtiene la respuesta
                System.Net.WebResponse response = wr.GetResponse();
                // Stream con el contenido recibido del servidor
                newStream = response.GetResponseStream();
                System.IO.StreamReader reader = new System.IO.StreamReader(newStream);
                // Leemos el contenido
                string responseFromServer = reader.ReadToEnd();

                // Cerramos los streams
                reader.Close();
                newStream.Close();
                response.Close();
                return responseFromServer;
            }
            catch (Exception ex)
            {
                if (ex.HResult == 404)
                    throw new Exception("Not found remote service " + url);
                else throw ex;
            }
        }
    }
}