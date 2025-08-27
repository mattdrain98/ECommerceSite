using Microsoft.EntityFrameworkCore;
using System.Data.Entity;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var allowedOrigins = builder.Configuration.GetValue<string>("allowedOrigins")!.Split(",");

builder.Services.AddCors(options =>
{
  options.AddDefaultPolicy(policy =>
  {
    policy.WithOrigins(allowedOrigins).AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod(); 
  });
});

var connectionString =
    builder.Configuration.GetConnectionString("DefaultConnection")
        ?? throw new InvalidOperationException("Connection string"
        + "'DefaultConnection' not found.");


builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
  options.UseSqlServer(connectionString);
  
}); 

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
