using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Application.Common.Models;
using MediatR;

namespace CleanArchitecture.Application.Setup.Employees.Queries;


public record GetAllEmployee(int PageNumber, int PageSize) : IRequest<PaginatedList<SetupDTo>>;
public class GetAllEmployeeQueryHandler : IRequestHandler<GetAllEmployee, PaginatedList<SetupDTo>>
{
    public readonly IApplicationDbContext _context;
    public readonly IMapper _mapper;
    public GetAllEmployeeQueryHandler(IApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    public async Task<PaginatedList<SetupDTo>> Handle(GetAllEmployee request, CancellationToken cancellationToken)
    {
        var employeesData = await _context.Employees
                        .OrderBy(x => x.Id)
                        .ProjectTo<SetupDTo>(_mapper.ConfigurationProvider)
                        .PaginatedListAsync(request.PageNumber, request.PageSize);

        return employeesData;
    }


}
