using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace todo.Models
{
  public class Task
  {
    [JsonProperty("id")]
    public int Id { get; set; }

    [JsonProperty("name")]
    public string Name { get; set; }

    [JsonProperty("description")]
    public string Description { get; set; }

    [JsonProperty("date")]
    public DateTime Date { get; set; }

    [JsonProperty("done")]
    public Boolean Done { get; set; }
  }
}
