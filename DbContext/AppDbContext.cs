using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace todo.DbContext
{
    public class AppDbContext : Microsoft.EntityFrameworkCore.DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }

    public DbSet<todo.Models.Task> Tasks { get; set; }
  }
}
