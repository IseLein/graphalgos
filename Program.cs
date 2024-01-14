var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

IResult getFileContent(string path, string type) {
    string fileContent = System.IO.File.ReadAllText(path);
    return Results.Content(fileContent, type);
}

app.MapGet("/", () => getFileContent("./site/index.html", "text/html"));
app.Run();
