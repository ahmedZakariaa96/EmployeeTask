using CleanArchitecture.Domain.Enums;

namespace CleanArchitecture.Application.Common.Models;

public class Result
{
    internal Result(bool succeeded, IEnumerable<string> errors, StatusResult statusResult= StatusResult.Success)
    {
        Succeeded = succeeded;
        Errors = errors.ToArray();
        StatusResult = statusResult;
    }

    public bool Succeeded { get; set; }

    public StatusResult StatusResult { get; set; }

    public string[] Errors { get; set; }

    public static Result Success()
    {
        return new Result(true, Array.Empty<string>(), StatusResult.Success);
    }

    public static Result Failure(IEnumerable<string> errors , StatusResult statusResult= StatusResult.Falid)
    {
        return new Result(false, errors, statusResult);
    }

}
