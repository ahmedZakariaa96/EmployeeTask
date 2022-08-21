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

public class CreateEmployee : IRequest<Result>,IMapFrom<Employee>
{
    public string Code { get; set; }
    public string? LatinName { get; set; }
    public string? ArabicName { get; set; }
    public bool? Active { get; set; }
}

public class CreateEmployeeCommandHandler : IRequestHandler<CreateEmployee, Result>
{

    public readonly IApplicationDbContext _context;
    public readonly IMapper _mapper;

    public CreateEmployeeCommandHandler(IApplicationDbContext context, IMapper mapper)
    {
        this._context = context;
        _mapper = mapper;
    }
    public async Task<Result> Handle(CreateEmployee request, CancellationToken cancellationToken)
    {
        string[] errors = { };

        var recordExist = this._context.Employees.Where(x => x.Code == request.Code).Any();
        if (!recordExist)
        {

            var newEmloyee = _mapper.Map<Employee>(request);
            await _context.Employees.AddAsync(newEmloyee);
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
