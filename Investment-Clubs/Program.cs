using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using System;

namespace Investment_Clubs
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
            Console.Write("d");
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
