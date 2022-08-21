using CleanArchitecture.Application.Common.Models;
using CleanArchitecture.Application.Common.Security;
using CleanArchitecture.Application.Setup.Employees.Commands;
using CleanArchitecture.Application.Setup.Employees.Queries;
using CleanArchitecture.WebUI.Filters;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CleanArchitecture.WebUI.Controllers.Setup;
//[Route("api/[controller]")]
//[ApiController
//
[ApiExceptionFilterAttribute]
[Authorize]
public class EmployeesController : ApiControllerBase
{
    [HttpGet]
    [Route("Api/Employees/GetAll")]
    public async Task<ActionResult<PaginatedList<SetupDTo>>> GetAllEmployees([FromQuery]  GetAllEmployee getAllEmployees)
    {
        var resData = await this.Mediator.Send(getAllEmployees);
        return resData;
    }
    [HttpPost]
    [Route("Api/Employees/Create")]
    public async Task<ActionResult<Result>> CreateEmployee(CreateEmployee createEmployee)

    {
        var res = await this.Mediator.Send(createEmployee);
        return res;
    }
    [HttpPut]
    [Route("Api/Employees/Update")]
    public async Task<ActionResult<Result>> UpdateEmployee(UpdateEmployee updateEmployees)

    {
        var res = await this.Mediator.Send(updateEmployees);
        return res;
    }

    [HttpDelete]
    [Route("Api/Employees/Delete")]
    public async Task<ActionResult<Result>> DeleteEmployee(int  id)
    {
        var res = await this.Mediator.Send(new DeleteEmployee(id));
        return res;
    }
}
