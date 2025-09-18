using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using MeuApp.Shared.Services;
using MeuApp.Web.Client.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

// Add device-specific services used by the MeuApp.Shared project
builder.Services.AddSingleton<IFormFactor, FormFactor>();

await builder.Build().RunAsync();
