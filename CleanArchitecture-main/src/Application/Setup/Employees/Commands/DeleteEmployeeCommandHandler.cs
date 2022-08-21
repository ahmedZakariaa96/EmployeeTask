using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Application.Common.Models;
using CleanArchitecture.Domain.Enums;
using MediatR;

namespace CleanArchitecture.Application.Setup.Employees.Commands;



public record DeleteEmployee(int Id) : IRequest<Result>;
public class DeleteEmployeeCommandHandler : IRequestHandler<DeleteEmployee, Result>
{

    public readonly IApplicationDbContext _context;
    public DeleteEmployeeCommandHandler(IApplicationDbContext context)
    {
        this._context = context;
    }
    public async Task<Result> Handle(DeleteEmployee request, CancellationToken cancellationToken)
    {
        string[] errors = { };
        string errorMessage = "child record found";
        try
        {
            var currentEmployee = await _context.Employees.FindAsync(new object[] { request.Id}, cancellationToken);
            if (currentEmployee == null)
            {
                return Result.Failure(errors, StatusResult.NotExists);
            }
            _context.Employees.Remove(currentEmployee);
            var res = await _context.SaveChangesAsync(cancellationToken);
            if (res == (int)StatusResult.Success)
            {
                return Result.Success();
            }
            else
            {

                return Result.Failure(errors);
            }
        }
        catch (Exception ex)
        {
            if (ex.Message.Contains(errorMessage) || (ex.InnerException != null && ex.InnerException.Message.Contains(errorMessage)))
            {
                return Result.Failure(errors, StatusResult.RelatedData);
            }
            else
            {
                throw;

            }
        }



    }


}


