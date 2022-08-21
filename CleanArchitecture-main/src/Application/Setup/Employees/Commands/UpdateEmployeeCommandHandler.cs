using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Application.Common.Models;
using CleanArchitecture.Domain.Entities;
using CleanArchitecture.Domain.Enums;
using MediatR;

namespace CleanArchitecture.Application.Setup.Employees.Commands;

public class UpdateEmployee : IRequest<Result>,IMapFrom<Employee>
{

    public int  Id { get; set; }
    public string Code { get; set; }
    public string? LatinName { get; set; }
    public string? ArabicName { get; set; }
    public bool? Active { get; set; }
}

public class UpdateEmployeeCommandHandler : IRequestHandler<UpdateEmployee, Result>
{

    public readonly IApplicationDbContext _context;
    public readonly IMapper _mapper;

    public UpdateEmployeeCommandHandler(IApplicationDbContext context, IMapper mapper)
    {
        this._context = context;
        _mapper = mapper;
    }
    public async Task<Result> Handle(UpdateEmployee request, CancellationToken cancellationToken)
    {
        string[] errors = { };

        var recordExist = _context.Employees.Where(x => x.Id == request.Id ).FirstOrDefault();
        if (recordExist == null)
        {
            return Result.Failure(errors, StatusResult.NotExists);
        }
        else
        {
            var codeExist = _context.Employees.Where(x => x.Code == request.Code && x.Id != request.Id).Any();
            if (!codeExist)
            {
                _mapper.Map( request,recordExist);
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

            else
            {
                return Result.Failure(errors, StatusResult.Exist);
            }
        }

    }






}
