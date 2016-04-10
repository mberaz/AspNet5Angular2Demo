
using AspNet5Angular2Demo.Models;
using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;


namespace AspNet5Angular2Demo.Controllers
{
    [Route("api/[controller]")]
    public class NoteController :Controller
    {
        List<NoteModel> list = new List<NoteModel>
        {
            new NoteModel{ Id= 1, Text= "never buy Tnova milk", Color="green" },
            new NoteModel{ Id= 2, Text= "strawberries", Color="red" },
            new NoteModel{ Id= 3, Text= "deadpool is awsome", Color="blue" },
            new NoteModel{ Id= 4, Text= "alwways bet on balck", Color="blue" },

        };

        [HttpGet]
        public IEnumerable<NoteModel> Get ()
        {
            return list;
        }

        [HttpGet("{id}")]
        public NoteModel Get (int id)
        {
            return list.FirstOrDefault(n => n.Id == id);
        }
    }

}
