using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNet.StaticFiles;
using Microsoft.AspNet.FileProviders;
using System.IO;

namespace AspNet5Angular2Demo
{
    public class Startup
    {
        private IHostingEnvironment _env;
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices (IServiceCollection services)
        {
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app,IHostingEnvironment env)
        {
            app.UseIISPlatformHandler();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            var mappedPath = env.WebRootPath.Replace("wwwroot","")+ "\\scripts";
            //FileProvider = new PhysicalFileProvider(@"C:\Users\bigmack\Documents\Visual Studio 2015\Projects\AspNet5Angular2Demo\AspNet5Angular2Demo\src\AspNet5Angular2Demo\scripts"),
            app.UseFileServer(new FileServerOptions()
            {

                FileProvider = new PhysicalFileProvider(mappedPath),
                RequestPath = new PathString("/scripts"),
            });

            app.UseMvc();
        }

        // Entry point for the application.
        public static void Main (string[] args) => WebApplication.Run<Startup>(args);
    }
}
