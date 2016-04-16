using AspNet5Angular2Demo.Models;
using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNet5Angular2Demo.Controllers
{
    [Route("api/[controller]")]
    public class UserController :Controller
    {
        public List<UserModel> list = new List<UserModel>{
            new UserModel{ Id=1, FullName="michael berezin", Email="mabearz@gmail.com",Password="123"},
            new UserModel{ Id=2, FullName="red ork", Email="redork@gmail.com",Password="123"},
            new UserModel{ Id=3, FullName="space jesus", Email="spacejesus@gmail.com",Password="123"},
            new UserModel{ Id=4, FullName="big bed wolf", Email="wolfy@gmail.com",Password="123"}
        };


        [HttpGet]
        public IEnumerable<UserModel> Get ()
        {
            return list;
        }

        [HttpGet("{id}")]
        public UserModel Get (int id)
        {
            return list.FirstOrDefault(l => l.Id == id);
        }

        [HttpPost]
        public UserModel Post (UserModel item)
        {
            item.Id = list.Count + 1;
            return item;
        }

        [HttpPut("{item}")]
        public UserModel Put (UserModel item)
        {
            return list.FirstOrDefault(l => l.Id == item.Id);
        }
    }
}
