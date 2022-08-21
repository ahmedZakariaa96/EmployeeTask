using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CleanArchitecture.Application.Common.Mappings;
using CleanArchitecture.Domain.Entities;

namespace CleanArchitecture.Application.Common.Models;
public class SetupDTo :IMapFrom<Employee>
{
    public int Id { get; set; }
    public string Code { get; set; }
    public string? LatinName { get; set; }
    public string? ArabicName { get; set; }
    public bool? Active { get; set; }
    public bool? IsOpenForEdit { get; set; }


    

}
