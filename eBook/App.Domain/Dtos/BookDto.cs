using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Domain.Dtos
{
    public class BookDto
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Title { get; set; } = null!;
        [Required]
        [MaxLength(50)]
        public string Author { get; set; } = null!;
        [Required]
        public int Price { get; set; }
        [Required]
        public DateTime PublishedDate { get; set; }
    }
}
