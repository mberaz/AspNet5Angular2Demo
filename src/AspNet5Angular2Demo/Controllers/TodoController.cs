
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Microsoft.AspNet.Mvc;
using AspNet5Angular2Demo.Models;

namespace AspNet5Angular2Demo.Controllers
{
    //http://localhost:59298/api
    [Route("api/[controller]")]
    public class TodoController :Controller
    {
        List<ListItem> list = new List<ListItem>
        {
            new ListItem{ Id= 1, Name= "Buy milk", IsDone=false, Type=1 },
            new ListItem{ Id= 2, Name= "Buy shoes", IsDone=true, Type=1  },
            new ListItem{ Id= 3, Name= "Throw away trash" , IsDone=false, Type=4 },
            new ListItem{ Id= 4, Name= "Play fallout 4", IsDone=false, Type=2  },
            new ListItem{ Id= 5, Name= "play fm" , IsDone=true, Type=2 },
            new ListItem{ Id= 6, Name= "chill", IsDone=false, Type=3  },
            new ListItem{ Id= 1, Name= "Buy T shirt", IsDone=false, Type=1 },
            new ListItem{ Id= 2, Name= "Clean house", IsDone=true, Type=1  },
            new ListItem{ Id= 3, Name= "Throw away old shoes" , IsDone=false, Type=4 },
            new ListItem{ Id= 4, Name= "Play more fallout 4", IsDone=false, Type=2  },
            new ListItem{ Id= 5, Name= "See star wars " , IsDone=true, Type=5 },
            new ListItem{ Id= 6, Name= "Spoil star wars ", IsDone=false, Type=5  },

        };

        [HttpGet]
        public IEnumerable<ListItem> Get ()
        {
            return list;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ListItem Get (int id)
        {
            return list.FirstOrDefault(l => l.Id == id);
        }

        [HttpPost]
        public ReturnModel Post (ListItem item)
        {
            return new ReturnModel { Status = true,Id = list.Count,Type = item.Type };
        }

        [HttpPut("{item}")]
        public ReturnModel Put (ListItem item)
        {
            var listItem = list.FirstOrDefault(l => l.Id == item.Id);
            return new ReturnModel { Status = true,Id = list.Count };
        }

    }
}
