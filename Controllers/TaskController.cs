using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using todo.DbContext;

namespace todo.Controllers
{
  [Route("api/[controller]")]
  public class TaskController : Controller
    {
    private AppDbContext context;

      public TaskController(AppDbContext context)
      {
        this.context = context;
      }

      [HttpPost("get/{id}")]
      public IActionResult Get(int id)
      {
        return Ok(context.Tasks.Find(id));
      }

      [HttpPost("all")]
      public async Task<IActionResult> GetAll()
      {
        var all = context.Tasks.ToList();

        return Ok(all);
      }

      [HttpPost("last")]
      public async Task<IActionResult> GetLast()
      {
        var last = context.Tasks.Last();
        return Ok(last);
      }

      [HttpPost("add")]
      public async Task<IActionResult> Add([FromBody] Models.Task task)
      {
        await context.Tasks.AddAsync(task);
        await context.SaveChangesAsync();
        return Ok(task);
      }

      [HttpPut("update/{id}")]
      public async Task<IActionResult> Update(int id, [FromBody] Models.Task task)
      {
        var model = context.Tasks.Find(id);

        model.Description = task.Description;
        model.Name = task.Name;
        model.Done = task.Done;
        model.Date = task.Date;

        context.Tasks.Update(model);
        context.SaveChanges();
        return Ok(model);
      }

      [HttpDelete("delete/{id}")]
      public async Task<IActionResult> Delete(int id)
      {
        var model = context.Tasks.Find(id);

        context.Tasks.Remove(model);
        context.SaveChanges();
        return Ok(model);
      }

  }
}
