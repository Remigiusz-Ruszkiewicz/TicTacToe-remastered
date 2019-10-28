using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicTacToe.Models;

namespace TicTacToe.Repositories
{
    public class JsonRepo : Repo
    {
        public override List<Result> GetResults()
        {
            string data = System.IO.File.ReadAllText("Data/Data.json");
            return JsonConvert.DeserializeObject<List<Result>>(data);
        }
    }
}
