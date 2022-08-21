using System.Text;
using MediatR;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace CleanArchitecture.Application.Common.Behaviours;

public class UnhandledExceptionBehaviour<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse> where TRequest : notnull
{
    private readonly ILogger<TRequest> _logger;
    private readonly IHostingEnvironment _IHostingEnvironment;
    public UnhandledExceptionBehaviour(ILogger<TRequest> logger, IHostingEnvironment iHostingEnvironment)
    {
        _logger = logger;
        _IHostingEnvironment = iHostingEnvironment;
    }
    public async Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken, RequestHandlerDelegate<TResponse> next)
    {
        try
        {
            return await next();
        }
        catch (Exception ex)
        {
            LogException(ex, request);//code mohsen added by zakaria
            var requestName = typeof(TRequest).Name;
            _logger.LogError(ex, "CleanArchitecture Request: Unhandled Exception for Request {Name} {@Request}", requestName, request);
            throw ;
        }
    }
    public void LogException(Exception ex, TRequest request)
    {
        try
        {
            if (!(ex is ThreadAbortException))
            {
                string logFilePath = _IHostingEnvironment.ContentRootPath + "\\Log\\";
                string filename = String.Format("ExceptionLog___{0:dd-MM-yyyy}.txt", DateTime.Now);
                string filePath = Path.Combine(logFilePath, filename);
                if (!Directory.Exists(logFilePath))
                    Directory.CreateDirectory(logFilePath);
                using (StreamWriter writer = new StreamWriter(filePath, true))
                {
                    Guid ExceptionID = Guid.NewGuid();
                    writer.WriteLine("ExceptionID : " + ExceptionID.ToString() + Environment.NewLine);
                    writer.WriteLine("Date : " + DateTime.Now.ToString() + Environment.NewLine);
                    writer.WriteLine("Request : " + request.GetType().Name + "" + request + Environment.NewLine);
                    writer.WriteLine(GetExceptionInfo(ex));
                }

            }
        }
        catch (Exception exx)
        {
            throw;
        }
    }
    public static string GetExceptionInfo(Exception ex)
    {

        StringBuilder Entry = new StringBuilder();
        Entry.AppendLine("Exception");
        Entry.AppendLine(string.Concat("Exception Message: ", ex.Message));
        Entry.AppendLine("----------------------------------------------------------------------------");
        Entry.AppendLine("Source: ");
        Entry.AppendLine(ex.Source);
        Entry.AppendLine("----------------------------------------------------------------------------");
        Entry.AppendLine("Stack Trace: ");
        Entry.AppendLine(ex.StackTrace);
        Entry.AppendLine("----------------------------------------------------------------------------");
        Entry.AppendLine(Environment.NewLine);


        Exception? innerException = ex.InnerException;
        if(innerException != null)
        {
            Entry.AppendLine("Inner Exception : ");
            Entry.Append(GetExceptionInfo(innerException));
        }
        var entryString= Entry.ToString();
        return entryString;

    }
}
