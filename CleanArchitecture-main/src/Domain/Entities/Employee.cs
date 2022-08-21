using System;
using System.Collections.Generic;

namespace CleanArchitecture.Domain.Entities
{
    public partial class Employee:BaseAuditableEntity
    {
        public string Code { get; set; }
        public string? LatinName { get; set; }
        public string? ArabicName { get; set; }
        public bool? Active { get; set; }

    }
}
