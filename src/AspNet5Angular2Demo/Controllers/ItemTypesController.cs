
using AspNet5Angular2Demo.Models;
using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.PlatformAbstractions;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;

namespace AspNet5Angular2Demo.Controllers
{
    [Route("api/[controller]")]
    public class ItemTypesController :Controller
    {

        List<ItemType> list = new List<ItemType>
        {
            new ItemType{ Id= 1, Name= "Buy"  },
            new ItemType{ Id= 2, Name= "Games"   },
            new ItemType{ Id= 3, Name= "Actions"  },
            new ItemType{ Id= 4, Name= "Misc"  },
            new ItemType{ Id= 5, Name= "Films"  },

        };

        [HttpGet]
        public IEnumerable<ItemType> Get ()
        {
            return list;
        }
    }

}
