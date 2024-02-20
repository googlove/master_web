using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.IO;

namespace lab3.Controllers
{
    [ApiController]
    [Route("WebServiceCalc")]
    public class WebServiceCalc : ControllerBase
{
    [HttpGet]
    [Route("main")]
    public string Index()
    {
        return "Калькулятор на основі веб-серсісу, створеного засобами ASP.NET";
    }

    [Route("add/{n1}/{n2}")]
    public string Add(float n1,float n2)
    {
        return ""+n1+" + "+n2+" = "+(n1+n2);
    }

    [Route("subtract/{n1}/{n2}")]
    public string Subtract(float n1,float n2)
    {
        return ""+n1+" - "+n2+" = "+(n1-n2);
    }

    [Route("multiply/{n1}/{n2}")]
    public string Multiply(float n1,float n2)
    {
        return ""+n1+" * "+n2+" = "+(n1*n2);
    }

    [Route("divide/{n1}/{n2}")]
    public string Divide(float n1,float n2)
    {
        return ""+n1+" / "+n2+" = "+(n1/n2);
    }
 
}
}
