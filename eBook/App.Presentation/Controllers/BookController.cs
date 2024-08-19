using App.Application.Services;
using App.Domain.Dtos;
using App.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace App.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly BookService _bookService;
        public BookController(BookService bookService)
        {
            _bookService = bookService;
        }
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> ListBook()
        {
            var books = await _bookService.ListBookAsync();
            if (!books.Any())
            {
                return NoContent();
            }
            return Ok(books);
        }
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> FromId([FromQuery] int id)
        {
            if (id == 0)
            {
                return BadRequest(new { message = "hatalı işlem" });
            }
            BookDto? response = await _bookService.FromIdAsync(id);
            if (response == null)
            {
                return NotFound(new { message = "Ürün Bulunamadı." });
            }
            return Ok(response);
        }
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [Consumes("application/json")]
        public async Task<IActionResult> AddProduct([FromBody] BookDto reguest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { message = "hatalı işlem" });
            }
            BookDto? response = await _bookService.AddBookAsync(reguest);
            if (response == null)
            {
                return BadRequest(new { message = "hatalı işlem" });
            }
            return Ok(response);
        }
        [HttpPut]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [Consumes("application/json")]
        public async Task<IActionResult> UpdateBook([FromBody] BookDto reguest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { message = "Model not valid" });
            }
            BookDto? response = await _bookService.UpdateBookAsync(reguest);
            if (response == null)
            {
                return BadRequest(new { message = "hatalı işlem" });
            }
            return Ok(response);
        }
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteBook(int id)
        {
            if (id == 0)
            {
                return NotFound();
            }
            bool response = await _bookService.DeleteBookAsync(id);
            if (!response)
            {
                return NotFound(new { message = "Ürün Bulunamadı." });
            }
            return Ok(new { succes = "İşlem başarılı." });
        }
    }
}
